# Step 1, DATA: ishankarunaratne.com, 21 November 2026

Read-only pull. Window for Google: 2026-05-25 to 2026-11-21 (180 days), property
`sc-domain:ishankarunaratne.com`. Bing: everything the API returns (about 16 weeks of query
data, 2026-08-20 onward for traffic). Raw output sits next to this file as `raw-*`.

## Sources and what each returned

| Source | Call | Result |
|---|---|---|
| GSC | `gsc-striking-distance.mjs 180 1` | 32 clicks, 136 impressions in query/page pairs (6 rows) |
| GSC | `gsc-page-queries.mjs` x5 | page totals below |
| GSC | `gsc-top-pages.mjs ishankarunaratne.com 180 20` | positional args only (`--site` fails with "no property"); omits `/` |
| GSC | ad hoc query by country and by date (scratch script, same lib) | `raw-gsc-country-date.txt` |
| GSC | URL Inspection (`gsc-inspect-all.mjs`) | **5/5 Submitted and indexed** (contact and writing were "Discovered, not indexed" in the old report). Copy in `raw-gsc-index-2026-11-21.md`; the script also overwrote the tracked `reviews/gsc-index-*` files, which I restored with `git checkout` so nothing outside this folder changed |
| Bing | GetPageStats, GetQueryStats, GetRankAndTrafficStats, GetPageQueryStats x5 | 13 impressions, 1 click since 2026-08-20 |
| DataForSEO | `keywords_data/google_ads/search_volume/live`, 18 keywords, US | cost **$0.09** |
| DataForSEO | `serp/google/organic/live/advanced`, "ishan karunaratne", US, depth 20 | cost **$0.002** |

**DataForSEO total: $0.092.**

## Google Search Console, per page (180 days)

| Page | Clicks | Impr | CTR | Avg pos | Queries with data |
|---|---|---|---|---|---|
| `/` | 87 | 307 | 28.3% | 3.9 | ishan karunaratne (31 / 74, pos 1.4), karunaratne (0/1, 24), sean karunaratne (0/1, 28) |
| `/about/` | 2 | 57 | 3.5% | 6.1 | ishan karunaratne (1 / 27, pos 6.4), heshan karunaratne (0/1, 25) |
| `/work/` | 0 | 48 | 0% | 4.6 | jwaedge (0 / 32, pos 4.1) |
| `/writing/` | 0 | 2 | 0% | 5.5 | none (anonymised) |
| `/contact/` | 0 | 3 | 0% | 5.0 | none (anonymised) |

Most of the home page's 307 impressions are anonymised queries (only 76 carry a query), which
for a personal site almost always means name variants and navigational one-offs.

### Trend (all pages, by month)

| Month | Clicks | Impr |
|---|---|---|
| 2026-08 | 63 | 208 |
| 2026-09 | 21 | 56 |
| 2026-10 | 2 | 30 |
| 2026-11 (to 21st) | 1 | 10 |

The August spike is the launch month. Demand has since fallen to near zero. The most likely
reading is that a large share of August's name searches were my own checks plus people who
already knew the URL; the name has no measurable public search volume (see DataForSEO).

### By country

- "ishan karunaratne" clicks are **all US** (31 of 31 on `/`, 1 on `/about/`), at pos 1.2.
  Sri Lanka 6 impressions (pos 3 to 6), single impressions in AU, GB, MX, TR.
- "jwaedge" on `/work/`: Russia 21, GB 5, Israel 3, Canada 2, US 1. Zero clicks. These are
  people looking for the JWA Edge site itself; `/work/` ranks because jwaedge.com is young.

## Bing (the engine that matters more for my other sites)

| Date (week) | Query | Page | Impr | Clicks | Pos |
|---|---|---|---|---|---|
| 2026-09-18 | ihan karunaratne | `/` | 1 | 0 | 8 |
| 2026-10-02 | ishan karunaratne | `/` | 1 | 1 | 1 |
| 2026-10-02 | ishan karunaratne | `/about/` | 1 | 0 | 2 |
| 2026-10-09 | techearl | `/writing/` | 1 | 0 | 3 |
| 2026-10-23 | ishan karunaratne | `/about/`, `/writing/`, `/contact/` | 6 | 0 | 16 to 24 |
| 2026-10-23 | techearl.com | (site) | 2 | 0 | 10 |
| 2026-10-30 | linkedin.com/in/ishan-karunarathne-66102555 | `/` | 1 | 0 | 4 |

Bing is effectively silent: 13 impressions and 1 click since August. One worrying data point:
the week of 23 October, the name query surfaced inner pages at positions 16 to 24 instead of
the home page at 1. Too few rows to call a trend, but it says Bing does not yet treat the home
page as the entity's canonical result.

## DataForSEO volumes (Google Ads, US, monthly)

| Keyword | Volume | Competition | CPC |
|---|---|---|---|
| ishan karunaratne | not reported (under 10) | | |
| ishan karunaratne cto | not reported | | |
| karunaratne | 70 | LOW | |
| techearl | not reported | | |
| dnschkr | not reported | | |
| dns checker | 33,100 | LOW | $10.59 |
| fractional cto | 1,600 | MEDIUM | $25.19 |
| fractional cto services | 320 | LOW | $19.25 |
| technical due diligence | 140 | MEDIUM | $18.33 |
| software architecture review | 20 | LOW | $0.07 |
| cto for hire | 20 | MEDIUM | |
| systems architect | 3,600 | LOW | $8.28 |
| network architect | 2,400 | LOW | $11.57 |
| hire fractional cto, fractional cto for startups, architecture review consultant, rehab media group cto, jwaedge | not reported | | |

## The name SERP: "ishan karunaratne", Google US, non-personalised (DataForSEO live)

SERP features: organic, **AI Overview** (asynchronous, content not captured), Images.

| Pos | Result | Who |
|---|---|---|
| 1 | Companies House (UK) officer page, "Ishan Manjula KARUNARATNE personal appointments" | another person (UK company officer) |
| 2 | AI Overview | |
| 3 | Images pack | |
| 4 | Threads @ishansasika | another person (Sri Lankan developer) |
| 5 | **rehab.com/expert/ishan-karunaratne** ("A U.S. Army Veteran, Ishan brings more than 20 years...") | **me**, employer's expert bio |
| 6 | Facebook ishan.karunaratne.5 (Wattala, Shangri-La) | another person |
| 7 | LinkedIn post, "Ishan Karu" | another person |
| 8 | Instagram @ishansasika | another person |
| 9 | LinkedIn, Ashan Karunaratne, Houston | different name |
| 10 | LinkedIn directory, "Tishan Karunaratne" profiles | different name |

**ishankarunaratne.com is not in the top 10 of the non-personalised US SERP.** My own
LinkedIn (`/in/ishankarunaratne/`) is not there either. The only result about me is the
rehab.com expert page at #5. This conflicts with GSC's pos 1.2 for the same query in the US;
the reconciliation is that GSC's 66 US impressions are dominated by personalised or
location-near searches (mine and people who already know me), while a cold US searcher does
not see the site. Treat the GSC position as optimistic.

The page types the SERP rewards for the name: **social/profile pages** (Threads, Facebook,
Instagram, LinkedIn), a **registry record** (Companies House), and an **organisational
expert bio** (rehab.com). All are one-person profile pages. No portfolio pages, no blogs.

## Primary query and intent per page

| Page | Primary query | Intent | Evidence |
|---|---|---|---|
| `/` | ishan karunaratne | Navigational / who is this person (profile) | 31 of 32 name clicks; pos 1.2 US in GSC |
| `/about/` | ishan karunaratne (career, credentials, "ishan karunaratne cto", "ishan karunaratne army") | Informational about the person (bio, background) | 27 impr pos 6.4; it competes with `/` |
| `/work/` | the portfolio brands: jwaedge, dnschkr / dns checker owner, techearl, "who built X" | Navigational to a project, then "who made this" | jwaedge 32 impr pos 4.1, 0 clicks |
| `/writing/` | techearl, "ishan karunaratne articles" | Navigational to the blog | Bing "techearl" pos 3; GSC 2 anonymised impr |
| `/contact/` | "contact ishan karunaratne", "hire ishan karunaratne", fractional CTO / architecture review enquiry | Transactional (referral traffic, not search) | 3 anonymised impr |

## Striking distance (pos 5 to 20)

| Query | Page | Pos | Impr | Note |
|---|---|---|---|---|
| ishan karunaratne | `/about/` | 6.4 | 27 | second listing behind `/` (sitelink-like); not a real opportunity on its own |
| jwaedge | `/work/` | 4.1 (GB 6.6, CA 7.0) | 32 | wrong target: searchers want jwaedge.com |
| ishan karunaratne (Bing) | `/about/`, `/writing/`, `/contact/` | 16 to 24 | 6 | Bing showing inner pages, not `/` |
| heshan / sean karunaratne, karunaratne | `/`, `/about/` | 24 to 28 | 3 | other people; ignore |

## CTR gaps

- **jwaedge -> `/work/`**: 32 impressions at pos 4.1, 0 clicks. Not a fix on this site; it means
  jwaedge.com does not yet rank for its own brand (it is registered but not verified in Bing
  either). The right fix is on jwaedge.com.
- **ishan karunaratne -> `/about/`**: 3.7% CTR at 6.4, normal for a second result under the
  home page's 41.9%.
- No CTR gap on `/`: 41.9% at pos 1.4.

## Queries each page should answer

**`/`** (the profile): who is Ishan Karunaratne; which Ishan Karunaratne (the US-based CTO and
systems architect, US Army veteran, not the Sri Lankan developer or the UK company officer);
what he does now (CTO at Rehab Media Group); what he built (DNS Checker, TechEarl); how to
reach or hire him.

**`/about/`**: Ishan Karunaratne CTO / career; Ishan Karunaratne US Army veteran; education
and certifications; how long in software; Rehab Media Group role; the FAQ questions already
on the page.

**`/work/`**: who built DNS Checker / dnschkr, who owns TechEarl, JWA Edge, BabyCarSeat.info,
etc.; Ishan Karunaratne projects; the default stack.

**`/writing/`**: TechEarl author; Ishan Karunaratne articles; topics (Linux, DevOps, DNS,
databases, security).

**`/contact/`**: hire a fractional CTO (as a person, not a services category); architecture
review / technical due diligence engagement; how to contact Ishan Karunaratne.
