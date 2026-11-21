# 06. Plan, 21 November 2026

Merged from 01 to 05e. Nothing in the technical audit blocks indexing: all five pages are indexed,
canonicals are self-referencing, redirects are single hop, the 404 is real, CWV lab scores are 100
and CLS 0. So the plan is facts first, then identity and schema, then polish.

## Apply now (routine)

| # | Fix | Sources in run |
|---|---|---|
| P1 | TechEarl "700+" to "600+" / "more than 600" on all nine lines (repo has 648 published, sitemap 647 articles) | 05b F1, 05d M-3, 05c G3 |
| P2 | What's Taller "293" to "550" in home JSON-LD and llms.txt | 05b F2, 05d L4 |
| P3 | American Lawyers Directory "51 states and DC" to "all 50 states and DC" (the site itself says "50 states and D.C.") | 05b F6 |
| P4 | "more than two decades" to "twenty-seven years" in the home lede and Person description | 05b F4, 05c G4 |
| P5 | Degree named the same everywhere ("online systems"); Lotus credential named the same everywhere | 05b F5, F10 |
| P6 | "roughly 130 pieces each" to "more than 100 each" (Linux 127, DevOps 124, WordPress 118, Security 103) | 05b F3 |
| P7 | /about/: ProfilePage with an unresolvable `mainEntity` becomes an AboutPage whose `mainEntity` is the Person declared inline with the same `@id`, carrying `hasCredential` (all visible on /about/). Home keeps the single ProfilePage, so the two pages stop competing as profiles | 03 SXO, 05d H-1, M-2 |
| P8 | About FAQ answers in first person; the "he" headings name the person, matching "Where is Ishan Karunaratne based?" | 05b C4, 05c G10 |
| P9 | Person `sameAs`: drop the TechEarl Facebook page (it is the publication's page, moved to the TechEarl Blog node); add the rehab.com expert bio (live, ranks #5 for the name) | 05d M-1, 03 SXO, 05c G5 |
| P10 | DNS Checker definition sentence with the domain, `alternateName: dnschkr.com`, and an FAQ line separating it from dnschecker.org | 05c G1 |
| P11 | "TechEarl is..." definition sentence on /work/ and /writing/ | 05c G2 |
| P12 | Latest writing: fix the date shown one day late, and replace the 15-entry lastmod window with a cache of publish dates so new articles are never missed; then run it | 05a M-1, 05b F8, F9 |
| P13 | Internal links: home lede to /work/, About FAQ to /work/ and /writing/, one line on /contact/ to /work/ and /about/ | 05b C5 |
| P14 | Duplicate H1/H2 on /work/ and /contact/ | 05b C11, 05c G9 |
| P15 | Home ProfilePage `dateModified`; /contact/ as ContactPage; "analysing" to "analyzing"; robots.txt adds Claude-SearchBot and Claude-User; sitemap lastmod; README file table | 05d L1-L2, 05b F14, 05e L2, 05a L2, L7 |

## Needs the owner (not applied)

- InsideDNS is down: `insidedns.com` SERVFAILs because the registrar points at Route 53 name servers that refuse the zone. Infrastructure, not this site. Entry left in place.
- GA4 runs on every page with no privacy notice (05b C8). A /privacy/ page per `~/dev/SITE-PRIVACY-PLAYBOOK.md` is new content and a decision.
- `llms.txt:5-7` "connect millions of people" is on no page and unverified (05b F7).
- `about/index.html:103` "250%+ month-over-month revenue increase" is ambiguous (05b C9).
- /work/ keyword-shaped anchors on the newest entries (05b C6): this is the deliberate anchor strategy recorded in README and prior passes, so skipped unless the owner wants it softened.
- techearl.com author Person mints its own `@id` and lists the Facebook page as the person (05c G6, 05d M-1): fix in the techearl repo.
- Wikidata item (05c G8), 312x250 social image (05a L6), GitHub Pages cannot set security headers or cache lifetimes (05a L4-L5).
- Lyrics LK / Chords LK / most-read "as of 13 September" figures: refresh per README monthly process.
- Workflow runs Node 22; global rule is Node 26.
