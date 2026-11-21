# 05a Technical SEO: ishankarunaratne.com (2026-11-21)

Method: `seo-technical` skill. Live site checked with curl (status codes, redirects, headers), the
claude-seo `pagespeed_check.py` (Lighthouse 13.6.0 through PSI, mobile and desktop, all five pages),
`sitemap_discovery.py`, `agentic_check.py`, and a headed CloakBrowser `playwright-cli` session at
390x844 and 1440x900 on all five pages plus a missing URL (layout overflow, touch targets, font
status, failed resources, console, axe-core 4.10.2 WCAG 2.2 AA). Live HTML is byte-identical to the
local working tree for every page, so the line numbers below are the live lines.

## Technical score: 93/100 (measured categories only)

| Category | Status | Score | Checks behind it |
|---|---|---|---|
| Crawlability | pass | 100 | robots.txt 200, valid, sitemap declared and valid (5 URLs), every page 1 click from `/`, 559 words without JS on `/` |
| Indexability | pass | 95 | self canonicals on all 5 pages, `index, follow`, 404 page `noindex, follow`; sitemap lastmod drift (Low) |
| Security | warn | 70 | HTTPS enforced, no mixed content; no HSTS/CSP/XFO/nosniff (GitHub Pages cannot set headers) |
| URL structure | pass | 100 | http, www, http+www all single-hop 301 to `https://ishankarunaratne.com/`; `/about` 301 to `/about/`; clean, short URLs |
| Mobile | pass | 100 | viewport meta, no horizontal overflow at 390px or 1440px on any page, Lighthouse/axe target-size pass |
| Core Web Vitals (lab) | pass | 98 | see table; no CrUX field data (low traffic) |
| Structured data | see 05d | n/a | |
| JS rendering | pass | 100 | static HTML; JS only adds a reveal fade and the footer year |
| IndexNow | pass | 100 | key file `667bfcc0cbb5ce2d4e504d0853990486.txt` served, `scripts/indexnow-submit.mjs` present |
| Outbound links | fail | 60 | InsideDNS domain does not resolve (High) |

### Lab Core Web Vitals (PSI / Lighthouse 13.6.0, 2026-11-21)

| Page | Mobile perf | Mobile LCP | CLS | TBT | Desktop perf |
|---|---|---|---|---|---|
| `/` | 100 (92 on a first cold run, FCP/LCP 2.4 s) | 0.8 s | 0 | 30 ms | 100 |
| `/about/` | 100 | 0.8 s | 0 | 10 ms | 100 |
| `/work/` | 100 | 0.9 s | 0 | 20 ms | 100 |
| `/writing/` | 100 | 0.8 s | 0 | 90 ms | 100 |
| `/contact/` | 94 (FCP/LCP 2.5 s) | 2.5 s | 0 | 0 ms | 100 |

The 2.4-2.5 s runs are cold-cache variance on GitHub's Fastly edge (`x-cache: MISS`), not a page
problem; reruns of the same pages land at 0.8 s. Accessibility 100 everywhere except `/about/` (96,
see Low-3). SEO and Best Practices 100 on every page.

## Critical

None.

## High

### H-1. InsideDNS does not resolve, so every link and the schema `url` for it are dead
- **Page:** `/work/`, `/` (schema), `llms.txt`
- **Where:** `work/index.html:227`, `:230`, `:232`, `:233` (four links), `work/index.html:38` (ItemList
  entry), `index.html:494-496` (`#insidedns` WebSite node, `url: https://insidedns.com/`),
  `llms.txt:72`
- **Evidence:** `curl https://insidedns.com/` fails with "Could not resolve host". `dig insidedns.com
  @1.1.1.1` returns SERVFAIL with `EDE 22 No Reachable Authority` / `EDE 23: 205.251.192.252:53
  returned REFUSED`. The registry still delegates to Route 53 (`NS-252.AWSDNS-31.COM`,
  `NS-618.AWSDNS-13.NET`, `NS-1456.AWSDNS-54.ORG`, `NS-1771.AWSDNS-29.CO.UK`, expiry 2027-04-16), but
  those name servers refuse the zone, which is what happens when the Route 53 hosted zone was
  deleted or recreated with a different NS set. Worth checking against the AWS failover revert of
  early October.
- **Impact:** four outbound links on the most-linked page go nowhere, the homepage entity graph
  claims ownership of a site no crawler can fetch, and llms.txt sends agents to a dead host.
- **Fix:** restore the hosted zone (or update the registrar NS records to the current zone's four
  name servers) so insidedns.com resolves. If the site is retired instead, remove the article at
  `work/index.html:226-235`, its ItemList entry at `:38`, the `#insidedns` node and its
  `owns`/`subjectOf` reference at `index.html:233`, and `llms.txt:72`, then fix the counts.

## Medium

### M-1. "Latest writing" misses the four newest TechEarl articles, contrary to the on-page claim
- **Page:** `/writing/`
- **Where:** `scripts/refresh-writing.mjs:59-61`; rendered block `writing/index.html:190-215`
- **Evidence:** the page says "Refreshed automatically from TechEarl each morning" and the daily
  workflow runs green (last run 2026-11-21 14:37 UTC), yet the newest item shown is 2 June 2026.
  TechEarl has four live posts published 2026-06-30 (`/llm-batch-api`, `/nano-banana-batch-api`,
  `/reduce-ai-api-costs`, `/bulk-process-wordpress-posts-ai`, all 200). The script takes only the
  15 entries with the latest sitemap `lastmod` (`.slice(0, COUNT * 3)`) before sorting by
  `datePublished`; TechEarl's bulk edits pushed 15+ older articles to a lastmod of 2026-09-23 or later,
  while those four still carry lastmod 2026-06-30, so they never reach the candidate set.
- **Fix:** sort by `datePublished` over a wider pool. Cheapest change: raise the window
  (`COUNT * 3` to something like 120), or better, have techearl.com expose a `published` date per
  URL (an RSS/JSON feed; `/feed.xml`, `/rss.xml` are all 404 today) and read that instead.

## Low

1. **Visible date and `datetime` disagree on the latest-writing items.** `writing/index.html:197`
   `datetime="2026-06-02"` shows "3 June 2026"; `:202`, `:207` `2026-06-01` show "2 June 2026".
   `refresh-writing.mjs:89` slices the local-time ISO string for the attribute while `fmt()` (`:81`)
   formats it through `new Date()`, i.e. UTC. Use the same source for both (format the sliced
   `YYYY-MM-DD` with `timeZone: "UTC"` on a `T12:00:00Z` date).
2. **Sitemap lastmod lags the content on `/`.** `sitemap.xml:3` says `/` was last modified 2026-09-20,
   but `index.html` changed on 2026-10-01, 2026-11-01 and 2026-11-19 (work counts in the visible
   footer and the `owns` list in the schema). Bump `/` to 2026-11-19. `/about/` and `/contact/`
   changed only in the footer count, so leaving those is defensible.
3. **Lighthouse flags colour contrast on `/about/` only because the reveal fade is mid-transition.**
   PSI reports `.track__when` / `.track__where` at 3.38-4.29:1 on `li.reveal` items
   (`about/index.html:312`, `assets/style.css:345-350`); axe-core on the settled page reports zero
   violations on all five pages. This makes the score flaky rather than wrong. If it matters, skip
   the reveal on `.track > li` (the career list is text, the motion adds little).
4. **No security headers.** No HSTS, CSP, X-Frame-Options, X-Content-Type-Options or Referrer-Policy
   (GitHub Pages does not allow custom headers). HTTPS redirect is enforced, so the practical risk
   is small. Only fixable by fronting the site with Cloudflare (proxy) and a transform rule; not
   worth doing for SEO alone.
5. **Short cache lifetime** (`cache-control: max-age=600` on CSS, font, images). GitHub Pages fixed
   value; Lighthouse estimates 48 KiB of repeat-visit savings. Same Cloudflare caveat.
6. **Social image is a 312x250 headshot on every page** (`index.html:16` and the same line on each
   page). Fine for the `summary` Twitter card, small for LinkedIn/Facebook large previews and no
   `og:image:width`/`height`/`alt`. Optional: a 1200x630 JPEG card plus the three dimension/alt tags.
7. **README is out of date.** `README.md` still describes "One static page" with a single-URL
   sitemap; the site has five pages, a 404, the writing workflow and `scripts/`. Docs only.

## Healthy (checked, no action)

- **Redirects:** `http://`, `https://www.`, `http://www.` each a single 301 to the apex HTTPS root;
  `/about`, `/work` 301 to the trailing-slash form. No chains.
- **`/index.html` and `/about/index.html` return 200** with the same bytes, but both carry the
  self canonical to the slash URL, so they consolidate. No action.
- **Real 404:** `/nope-xyz`, `/llms-full.txt`, `/.well-known/security.txt` return HTTP 404 with the
  custom page; `404.html:8` is `noindex, follow`; `/404.html` itself returns 200 but is noindex.
  The page fires a `page_not_found` GA4 event (`404.html:189-190`).
- **Indexability:** every page has a unique title and meta description, a self canonical
  (`index.html:8`, `about/index.html:8`, etc.), `index, follow, max-image-preview:large,
  max-snippet:-1`, one H1.
- **Rendering:** all content is in the raw HTML (559 words on `/` without JS). The reveal script
  only adds the hidden state from JS, honours `prefers-reduced-motion`, and has a 2.5 s safety net.
  Zero `.reveal:not(.in)` items remained after settle on any page.
- **Fonts:** one self-hosted 46 KB variable woff2, preloaded with `crossorigin`
  (`index.html:21`), `font-display: optional` (`assets/style.css:6`), so no font-swap CLS.
- **Images:** every `<img>` has width/height; the hero has `fetchpriority="high"`
  (`index.html:620`); the 18 work screenshots are 1200x750 WebP, 18-79 KB, `loading="lazy"
  decoding="async"`. CLS 0 everywhere.
- **GA4:** `G-11XFYLQ238` loads `async` on every page (the homepage tag sits after the long
  JSON-LD at `index.html:579-587`, still inside `<head>`), `dataLayer` populated, no failed
  requests. Only cost is Lighthouse "unused JavaScript" (~75 KiB, gtag), which is inherent to GA4.
- **Mobile and desktop:** no horizontal scroll at 390px or 1440px; nav, footer and inline links pass
  WCAG 2.2 target size (spacing exception), confirmed by Lighthouse and axe.
- **Console:** zero errors on all five pages (the only error logged on the missing URL is the
  expected 404 for the document itself). Note that CloakBrowser suppresses some console events;
  Lighthouse Best Practices (100, "no browser errors logged") agrees.
- **Internal links:** every internal href and every other outbound link on the site returns 200
  (LinkedIn via one redirect). Only InsideDNS fails (H-1).
- **IndexNow:** key file live at `/667bfcc0cbb5ce2d4e504d0853990486.txt`.

## Severity counts

Critical 0, High 1, Medium 1, Low 7.
