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

const xml = await get(SITEMAP);
const candidates = articlesFromSitemap(xml)
  .sort((a, b) => b.lastmod.localeCompare(a.lastmod))
  .slice(0, COUNT * 3);

const enriched = [];
for (const c of candidates) {
  try {
    enriched.push(await enrich(c));
  } catch (e) {
    console.error(`skip ${c.url}: ${e.message}`);
  }
}

const latest = enriched
  .sort((a, b) => b.published.localeCompare(a.published))
  .slice(0, COUNT);

if (latest.length === 0) {
  console.error("no articles resolved; leaving the writing page untouched");
  process.exit(1);
}

const fmt = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

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

  const next = html.slice(0, s) + block + html.slice(e + END.length);
  if (next === html) continue;
  writeFileSync(file, next);
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
