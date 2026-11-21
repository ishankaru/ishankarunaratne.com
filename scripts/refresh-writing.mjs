// Rebuild the "Latest writing" block on /writing/ from techearl.com's sitemap.
//
// This exists so the page changes when there is genuinely something new to say,
// rather than shuffling static content to look busy. If nothing has been
// published since the last run the file is left byte-identical and the workflow
// commits nothing.
//
// Author: Ishan Karunaratne — https://ishankarunaratne.com

import { readFileSync, writeFileSync } from "node:fs";

const SITEMAP = "https://techearl.com/sitemap.xml";
const COUNT = 5;
const START = "<!-- writing:start -->";
const END = "<!-- writing:end -->";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function get(url) {
  const r = await fetch(url, { headers: { "user-agent": "ishankarunaratne.com refresh" } });
  if (!r.ok) throw new Error(`${r.status} for ${url}`);
  return r.text();
}

// Articles carry priority 0.8; categories 0.7, static pages 0.5, home 1.
function articlesFromSitemap(xml) {
  const out = [];
  const re = /<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>[\s\S]*?<priority>(.*?)<\/priority>\s*<\/url>/g;
  let m;
  while ((m = re.exec(xml))) {
    const [, loc, lastmod, priority] = m;
    if (priority.trim() === "0.8") out.push({ url: loc.trim(), lastmod: lastmod.trim() });
  }
  return out;
}

// lastmod tracks edits, so sort candidates by the real datePublished from each
// article's Article schema. Falls back to lastmod when the schema is absent.
async function enrich(entry) {
  const html = await get(entry.url);
  const title =
    (html.match(/<meta property="og:title" content="([^"]+)"/) || [])[1] ||
    (html.match(/<title>([^<]+)<\/title>/) || [])[1] ||
    entry.url;
  const description =
    (html.match(/<meta name="description" content="([^"]+)"/) || [])[1] || "";
  const published =
    (html.match(/"datePublished"\s*:\s*"([^"]+)"/) || [])[1] || entry.lastmod;
  return {
    ...entry,
    title: title.replace(/\s*\|\s*TechEarl\s*$/, "").trim(),
    description: description.trim(),
    published,
  };
}

// Publish dates live in a small cache so each run only fetches articles it
// has never seen. A sitemap lastmod window is not enough: a bulk edit gives
// hundreds of old articles a newer lastmod than a genuinely new article, which
// then never makes the list.
const CACHE = "scripts/writing-dates.json";
let cache = {};
try {
  cache = JSON.parse(readFileSync(CACHE, "utf8"));
} catch {}

const xml = await get(SITEMAP);
const articles = articlesFromSitemap(xml);
const unseen = articles.filter((a) => !cache[a.url]);

async function pool(items, size, fn) {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (queue.length) await fn(queue.shift());
    })
  );
}

const fresh = {};
await pool(unseen, 6, async (a) => {
  try {
    const e = await enrich(a);
    cache[a.url] = e.published;
    fresh[a.url] = e;
  } catch (e) {
    console.error(`skip ${a.url}: ${e.message}`);
  }
});

// Drop retired URLs so the cache tracks the live sitemap.
const live = new Set(articles.map((a) => a.url));
for (const url of Object.keys(cache)) if (!live.has(url)) delete cache[url];
const sortedCache = Object.fromEntries(Object.entries(cache).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(CACHE, JSON.stringify(sortedCache, null, 1) + "\n");

const newest = articles
  .filter((a) => cache[a.url])
  .sort((a, b) => cache[b.url].localeCompare(cache[a.url]))
  .slice(0, COUNT);

const latest = [];
for (const a of newest) {
  try {
    latest.push(fresh[a.url] || (await enrich(a)));
  } catch (e) {
    console.error(`skip ${a.url}: ${e.message}`);
  }
}

// A partial list means a fetch failed, not that an article went away. Leave
// the page as it is rather than drop an entry and claim a fresh update.
if (latest.length > 0 && latest.length < newest.length) {
  console.error(`only ${latest.length} of ${newest.length} articles resolved; leaving the writing page untouched`);
  process.exit(0);
}

if (latest.length === 0) {
  console.error("no articles resolved; leaving the writing page untouched");
  process.exit(1);
}

// Format the calendar date as written (YYYY-MM-DD prefix), so an article
// published late in the evening US time does not show as the next day.
const fmt = (iso) =>
  new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

const items = latest
  .map(
    (a) => `        <li>
          <a href="${esc(a.url)}">${esc(a.title)}</a>
          <span>${esc(a.description)}</span>
          <time datetime="${esc(a.published.slice(0, 10))}">${fmt(a.published)}</time>
        </li>`
  )
  .join("\n");

const block = `${START}
      <ul class="writing">
${items}
      </ul>
      ${END}`;

// The writing list lives on /writing/. Any file carrying both markers gets the
// same block, so moving or duplicating the list is a matter of adding the
// markers rather than editing this script. A file without them is skipped
// quietly; a run that matches nothing at all is an error worth failing on,
// because it means the markers were lost in a redesign.
const files = ["writing/index.html"];

let changed = 0;
let matched = 0;
for (const file of files) {
  const html = readFileSync(file, "utf8");
  const s = html.indexOf(START);
  const e = html.indexOf(END);
  if (s === -1 || e === -1) continue;
  matched++;

  let next = html.slice(0, s) + block + html.slice(e + END.length);
  if (next === html) continue;
  // A real change dates the page: the visible "Updated" row, dateModified in
  // the CollectionPage schema, and the sitemap entry, so the freshness signal
  // is only ever claimed when the content actually moved.
  const today = new Date().toISOString().slice(0, 10);
  next = next
    .replace(/(<time id="updated" datetime=")[^"]+(">)[^<]+(<\/time>)/, `$1${today}$2${fmt(today)}$3`)
    .replace(/("dateModified":")[^"]+(")/, `$1${today}$2`);
  writeFileSync(file, next);
  try {
    const sm = readFileSync("sitemap.xml", "utf8");
    writeFileSync("sitemap.xml", sm.replace(/(<loc>https:\/\/ishankarunaratne\.com\/writing\/<\/loc><lastmod>)[^<]+/, `$1${today}`));
  } catch {}
  changed++;
}

if (matched === 0) {
  console.error(`markers ${START} / ${END} not found in: ${files.join(", ")}`);
  process.exit(1);
}
if (changed === 0) {
  console.log("no change");
  process.exit(0);
}
console.log(`updated ${changed} file(s) with ${latest.length} articles, newest ${latest[0].published.slice(0, 10)}`);
