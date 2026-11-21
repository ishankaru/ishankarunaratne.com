## `about/index.html`

[ERROR] `about/index.html`  
Claim: `"Cisco CCNA coursework"` with `"credentialCategory": "certification"`  
Problem: The visible copy says coursework, but the Person schema classifies it as a certification. Cisco says the CCNA certification is earned by passing its exam.  
Correction: Keep “CCNA coursework” in the copy; remove its certification classification from structured data.  
Source: [Cisco CCNA certification requirements](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html)

[VERIFIED-CORRECT] `about/index.html`  
Claim: `"Bachelor's degree, online systems, 2008 to 2010"`  
Problem: The wording looked unusually specific, but it matches the owner’s TechEarl author profile. This is corroboration from another owner-controlled page, not an independent degree record.  
Correction: None.  
Source: [TechEarl author profile](https://techearl.com/author)

[VERIFIED-CORRECT] `about/index.html`  
Claim: `"https://www.rehab.com/expert/ishan-karunaratne"` in the Person `sameAs` list  
Problem: Checked that the URL identifies Ishan Karunaratne as CTO.  
Correction: None.  
Source: [Rehab.com expert profile](https://www.rehab.com/expert/ishan-karunaratne)

## `index.html`

[IMPRECISION] `index.html`  
Claim: `"description": "A Jurassic World Alive dinosaur database exported from the game's own data: 521 creatures, 2,005 ability records and 250 fusion recipes..."`  
Problem: The home page embeds detailed descriptions of all eighteen projects in JSON-LD, while its visible body is a person profile and does not present those project details. Google’s structured-data guidance calls for markup to represent content visible on the page. The JWA creature count is also outdated, as noted under `/work/`.  
Correction: Keep detailed project markup on `/work/`, where readers can see it; keep the home graph focused on the visible profile.  
Source: [Google structured-data content guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

[VERIFIED-CORRECT] `index.html`  
Claim: `"alternateName": "dnschkr.com"` for DNS Checker  
Problem: Checked the distinct live site and the TechEarl author’s link to it. The TechEarl Facebook URL is attached to the Blog node, not the Person node, in the edited graph.  
Correction: None.  
Source: [DNS Checker](https://dnschkr.com/), [TechEarl author profile](https://techearl.com/author)

## `work/index.html`

[STALE] `work/index.html`  
Claim: `"521 Jurassic World Alive creatures"`  
Problem: JWA Edge currently displays **526** creatures. The old figure is repeated in `index.html` JSON-LD and `llms.txt`.  
Correction: Update the creature count to 526 in all three places.  
Source: [JWA Edge dinosaur guide](https://jwaedge.com/)

[STALE] `work/index.html`  
Claim: `"71 recalls since 2010, refreshed daily"`  
Problem: The linked recall page says its November 21 check of NHTSA data lists **69** campaigns since 2010. `llms.txt` repeats 71.  
Correction: Use 69 for the current count, or omit the count if it will not be refreshed with the source.  
Source: [BabyCarSeat.info recall list](https://babycarseat.info/car-seat-recalls/)

[IMPRECISION] `work/index.html`  
Claim: `"All 50 states and DC, 8 practice areas"`  
Problem: All 51 jurisdiction pages are linked, but the directory says the eight practice areas are what the *first listings will cover* and that listings are coming soon. The note reads as present attorney coverage. The adjacent “rather than paid placement” wording also needs care: the directory says sponsored placements exist, while organic ranking cannot be bought.  
Correction: Describe the live state and DC pages and the planned listing coverage; distinguish organic ranking from labeled sponsorship. The corresponding home JSON-LD description needs the same distinction.  
Source: [American Lawyers Directory](https://americanlawyersdirectory.com/)

[VERIFIED-CORRECT] `work/index.html`  
Claim: `"Linux, DevOps, WordPress, and application security, more than 100 pieces each"`  
Problem: Checked the live category totals: Linux 140, DevOps 194, WordPress 139, and Security 146.  
Correction: None.  
Source: [Linux](https://techearl.com/linux), [DevOps](https://techearl.com/devops), [WordPress](https://techearl.com/wordpress), [Security](https://techearl.com/security)

[VERIFIED-CORRECT] `work/index.html`  
Claim: `"550 real and fictional subjects"`  
Problem: What’s Taller currently displays 550 objects total.  
Correction: None.  
Source: [What’s Taller](https://whatstaller.com/)

[VERIFIED-CORRECT] `work/index.html`  
Claim: `"more than 240 million domains a day"`  
Problem: DNS Checker says it processes zone-file data daily and tracks over 240 million domain records.  
Correction: None.  
Source: [DNS Checker](https://dnschkr.com/)

[VERIFIED-CORRECT] `work/index.html`  
Claim: `"14,333 licensed providers across Texas"` and `"228 US models across 15 brands"`  
Problem: Both figures match the respective live home pages.  
Correction: None.  
Source: [Daycare Index](https://daycareindex.com/), [BabyCarSeat.info](https://babycarseat.info/)

[VERIFIED-CORRECT] `work/index.html`  
Claim: `"more than 1,700 songs with chords and tabs"`  
Problem: Chords LK currently lists 2,098 songs, so the stated lower bound holds.  
Correction: None.  
Source: [Chords LK song archive](https://chordslk.com/songs)

[NEEDS-MANUAL-CHECK] `work/index.html`  
Claim: `"480 flavors from 30 brands ... 443 of them on shelves"`  
Problem: The live Energy Drink Flavors pages could not be retrieved through the available web access, so these figures remain unverified.  
Correction: Check the production catalog and status totals directly before retaining them as current figures.  
Source: [Energy Drink Flavors](https://energydrinkflavors.com/)

[NEEDS-MANUAL-CHECK] `work/index.html`  
Claim: `"2,005 ability records, and 250 fusion recipes"`  
Problem: The public ability page displays 1,225 abilities and the hybrid page displays 253 hybrids, but neither exposes a count of underlying ability *records* or fusion *recipes*. Those are different measures, so the claimed numbers cannot be confirmed or corrected from these pages.  
Correction: Compare the figures with the game-data export used to generate JWA Edge.  
Source: [JWA Edge abilities](https://jwaedge.com/abilities), [hybrid guide](https://jwaedge.com/hybrids)

## `writing/index.html`

[NEEDS-MANUAL-CHECK] `writing/index.html`  
Claim: `"more than 600 articles at TechEarl"`  
Problem: The specified live sitemap could not be retrieved, so its priority-0.8 article entries could not be counted. The local date cache has 647 URLs, but a cache is not proof of the current sitemap. This count is repeated on `/work/`, `/about/`, `404.html`, and in writing metadata.  
Correction: Count the live priority-0.8 sitemap entries before treating 600+ as verified.  
Source: [TechEarl sitemap](https://techearl.com/sitemap.xml)

[VERIFIED-CORRECT] `writing/index.html`  
Claim: `"23 August 2026"` for the WordPress sandbox article and `"30 June 2026"` for the listed batch API and cost articles  
Problem: The article pages and TechEarl’s latest-writing list show those publication dates. The five entries are ordered by the displayed publication dates.  
Correction: None.  
Source: [WordPress sandbox article](https://techearl.com/wordpress-code-snippet-sandbox), [LLM Batch API article](https://techearl.com/llm-batch-api), [Nano Banana Batch API article](https://techearl.com/nano-banana-batch-api), [AI API costs article](https://techearl.com/reduce-ai-api-costs), [TechEarl](https://techearl.com/)

## `scripts/refresh-writing.mjs`

[IMPRECISION] `scripts/refresh-writing.mjs`  
Claim: `"this list only changes when something new has actually gone out"` on `/writing/`  
Problem: The script catches a failed fetch for any of the top five articles, then still writes the shorter `latest` array when at least one fetch succeeds. A temporary article-fetch failure can therefore remove an entry and advance the page’s update date without a new publication.  
Correction: Leave the existing block untouched unless all selected articles resolve, or reuse the existing entry on an individual fetch failure.  
Source: [Edited working-tree script](/Users/ishankarunaratne/dev/node/2026/ishankarunaratne.com/scripts/refresh-writing.mjs)

## `sitemap.xml`

[ERROR] `sitemap.xml`  
Claim: `"<loc>https://ishankarunaratne.com/work/</loc><lastmod>2026-11-17</lastmod>"`  
Problem: `work/index.html` was edited today, November 21, yet its sitemap `lastmod` still says November 17. The page’s visible “Updated” date and `dateModified` also retain November 17.  
Correction: Set the work page and sitemap modification dates to November 21 for this edit.  
Source: [Sitemaps protocol: `lastmod`](https://www.sitemaps.org/protocol.html)

`contact/index.html`, `404.html`, and `robots.txt` had no additional sourced finding. The page titles, canonicals, primary intents, and shared `#person` identifier showed no clear collision or graph break in the edited state.

ERROR: 2 · STALE: 2 · IMPRECISION: 3 · VERIFIED-CORRECT: 8 · NEEDS-MANUAL-CHECK: 3
