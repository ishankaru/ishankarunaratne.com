# 09. Verification of the Codex review, 21 November 2026

Each Codex finding re-checked against its cited source before anything was changed.

| # | Codex | Finding | Re-check | Label | Action |
|---|---|---|---|---|---|
| 1 | ERROR | "Cisco CCNA coursework" typed as a certification in the Person schema | Visible copy says coursework; a CCNA certification requires the exam (cisco.com) | ERROR | `credentialCategory` set to "coursework" on /about/ |
| 2 | STALE | JWA Edge 521 creatures | jwaedge.com: "526 creatures: 273 base creatures and 253 hybrids" | STALE | 526 on /work/ (note, body, ItemList), home JSON-LD, llms.txt |
| 3 | STALE | BabyCarSeat "71 recalls since 2010" | babycarseat.info/car-seat-recalls/: "NHTSA's data lists 69 child restraint recall campaigns since 2010" | STALE | "69 recall campaigns" on /work/ and llms.txt |
| 4 | IMPRECISION | ALD "8 practice areas" and "nobody can buy a better position" | americanlawyersdirectory.com: "8 Practice areas the first listings will cover", "Listings coming soon", "Sponsored placements exist, and they are labeled. Organic listings never move for money." | IMPRECISION | "8 practice areas planned"; organic rankings cannot be bought, sponsored placements labeled (work, home JSON-LD, llms.txt) |
| 5 | ERROR | /work/ sitemap lastmod and dateModified still 2026-11-17 after today's edit | True | ERROR | 2026-11-21 in sitemap, dateModified and the visible Updated row |
| 6 | IMPRECISION | refresh script writes a shortened list when one article fetch fails | True (catch, then write whatever resolved) | IMPRECISION | Script now leaves the page untouched unless every selected article resolves |
| 7 | NEEDS-MANUAL-CHECK | Energy Drink Flavors 480/30/443 | Live site and its llms.txt now say 508 flavors, 32 brands, 466 on shelves; Red Bull 25, Alani Nu 24 (Monster 68, Celsius 44, Bloom 12 unchanged) | STALE | Updated on /work/, home JSON-LD, llms.txt, dated 2026-11-21 |
| 8 | NEEDS-MANUAL-CHECK | TechEarl "600+" | techearl.com/sitemap.xml has 647 priority-0.8 (article) entries | VERIFIED-CORRECT | None |
| 9 | NEEDS-MANUAL-CHECK | JWA Edge 2,005 ability records, 250 fusion recipes | Public pages show 1,225 abilities and 253 hybrids, different measures from the export | NEEDS-MANUAL-CHECK | Left; owner to confirm against the export |
| 10 | IMPRECISION | Home JSON-LD carries detailed descriptions of all eighteen projects not visible on / | The `owns` graph is the canonical cross-site entity graph (README, prior passes); the same details are visible on /work/ | Skipped, project rule | None; noted for the owner |

Codex VERIFIED-CORRECT items (8): degree wording, rehab.com sameAs, dnschkr.com alternateName and the
Facebook move, TechEarl category sizes (Linux 140, DevOps 194, WordPress 139, Security 146 on the
live category pages, so "more than 100 each" holds), What's Taller 550, DNS Checker 240 million,
Daycare Index 14,333 and BabyCarSeat 228/15, Chords LK 1,700+ (2,098 live), latest-writing dates.

Re-run after applying: all JSON-LD parses on every page, no stale strings left, refresh script
`node --check` clean and a re-run is a no-op.
