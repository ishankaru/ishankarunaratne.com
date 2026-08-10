// Ping IndexNow so Bing, Yandex, and the other participating engines recrawl
// this site straight away instead of waiting for their own crawl cycle.
//
// Bing and DuckDuckGo (which is Bing-backed) send the overwhelming majority of
// this site's search traffic, so a same-day recrawl there is worth far more
// than it would be on a Google-dominated site. Google does not use IndexNow.
//
// Ownership is proved by serving the key back at https://<host>/<key>.txt, so
// that file has to be deployed and reachable before this will validate.
//
// Author: Ishan Karunaratne — https://ishankarunaratne.com

const HOST = "ishankarunaratne.com";
const KEY = "667bfcc0cbb5ce2d4e504d0853990486";
const URLS = ["https://ishankarunaratne.com/"];

const keyUrl = `https://${HOST}/${KEY}.txt`;
const probe = await fetch(keyUrl).catch(() => null);
if (!probe || !probe.ok) {
  console.error(`Key file not reachable at ${keyUrl}. Deploy it first.`);
  process.exit(1);
}
if ((await probe.text()).trim() !== KEY) {
  console.error("Key file contents do not match the key.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList: URLS }),
});

console.log(`IndexNow responded ${res.status} ${res.statusText} for ${URLS.length} URL(s)`);
process.exit(res.ok || res.status === 202 ? 0 : 1);
