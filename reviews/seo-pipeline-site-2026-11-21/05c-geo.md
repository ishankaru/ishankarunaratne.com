# 05c. GEO and AI citability (seo-geo), 21 November 2026

Read only. Target queries: "who is Ishan Karunaratne", "who built DNS Checker", "what is
TechEarl", "Ishan Karunaratne CTO". Per Google's AI optimization guide, this is ordinary SEO
applied to AI answer surfaces; llms.txt carries no Google weight. AI-platform visibility was
**not measured** with a tool in this pass (no DataForSEO/ChatGPT scrape), so platform
readiness below is qualitative.

## GEO readiness: 68/100 (heuristic)

| Area | Weight | Score | Note |
|---|---|---|---|
| Citability | 25 | 17 | Strong person definition; no "X is..." sentence for DNS Checker or TechEarl |
| Structure | 20 | 15 | Clean H1/H2/H3, question H3s on About; duplicate H1/H2 on two pages |
| Multi-modal | 15 | 10 | Portrait, 18 screenshots with descriptive alt; no video |
| Authority and brand | 20 | 11 | ORCID, sameAs, disambiguation; stale counts, no Wikidata, a brand page in Person sameAs |
| Technical access | 20 | 15 | Static HTML, all bots allowed; a few minor robots/schema issues |

## What is already strong

- **Front-loaded identity answer.** `index.html:606-610` and `about/index.html:81` open with
  "Ishan Karunaratne is a systems and network architect and Chief Technology Officer..."
  inside the first 30% of the page. It is quotable without context.
- **Disambiguation is explicit in three layers**: visible FAQ (`about/index.html:228-238`),
  `disambiguatingDescription` (`index.html:39`), and `llms.txt:16-23`, all naming the two
  known namesakes and pointing at ORCID 0009-0002-3088-0769.
- **One Person `@id`** (`https://ishankarunaratne.com/#person`) that every page's JSON-LD
  references, with `owns` pointing at 18 project nodes. dnschkr.com's author page references
  the same `@id` (checked live).
- **Rendering.** Every fact is in the static HTML. The only script is a reveal animation that
  adds its hidden state in JS and force-reveals after 2.5 s, so non-JS crawlers see everything.
- **Crawler access** (`robots.txt`): `User-agent: * Allow: /`, so Googlebot (Search, AI
  Overviews, AI Mode) is allowed. Search-citability bots: OAI-SearchBot allowed explicitly,
  PerplexityBot allowed explicitly, Claude-SearchBot and Claude-User allowed via `*`, Applebot
  allowed explicitly. Training bots: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended
  allowed explicitly; CCBot allowed via `*`. Nothing blocked.
- **llms.txt present** (`llms.txt`, 78 lines) with identity, disambiguation, citation policy,
  pages and projects. Useful for non-Google systems; reported only, no score weight.

## Query by query

### "who is Ishan Karunaratne": good, with one inconsistency
Answer passage exists (above). Problems: the lede says "more than two decades" while the
masthead and every other surface say twenty-seven years (05b F4), and an answer engine that
merges the two will hedge. Recommended single sentence, used verbatim on `/`, `/about/`, the
JSON-LD `description` and `llms.txt:3` (all facts already on the site):

> Ishan Karunaratne is a systems and network architect and the Chief Technology Officer at
> Rehab Media Group, with twenty-seven years in production software, Linux systems, and
> network and cloud infrastructure. He is a US Army veteran of Operation Iraqi Freedom, writes
> TechEarl, and is the sole developer of DNS Checker at dnschkr.com.

(This is the one deliberate third-person sentence; the rest of the copy stays first person.)

### "who built DNS Checker": weak (G1, High)
"DNS Checker" is also the name people use for dnschecker.org, a different and much larger
site. The answer an AI gives for "who built DNS Checker" will usually be about that site, and
nothing on ishankarunaratne.com separates the two: the home lede links the bare words "DNS
Checker" (`index.html:610`), the `/work/` entry opens with a sentence fragment that never
says "DNS Checker is" (`work/index.html:90`), and the JSON-LD node has no `alternateName`
(`index.html:266-286`) although dnschkr.com itself declares `alternateName: "dnschkr.com"`.
Fix:
- `work/index.html:90`, replace the opening with:
  > DNS Checker (dnschkr.com) is a domain intelligence platform that analyzes more than 240
  > million domains a day. I designed and wrote it alone and still operate it: ingestion, the
  > Elasticsearch index, the API, the front end, and the servers it runs on.
- `index.html:610`: "the sole developer of <a href="https://dnschkr.com">DNS Checker
  (dnschkr.com)</a>".
- `index.html:268-271`: add `"alternateName": ["dnschkr.com", "DNSChkr"]` (use only the forms
  the product itself uses) and a `sameAs` to dnschkr.com's own About or author page.
- Add one FAQ to `/about/`: "**Did I build dnschecker.org?** No. My DNS Checker is
  dnschkr.com; dnschecker.org is a separate site I have no connection with." Mirror it in
  `llms.txt` disambiguation.

### "what is TechEarl": weak (G2, High)
No page has a "TechEarl is..." sentence. The nearest is first person and carries the false
count: "I write TechEarl, a single-author developer publication with more than 700 articles"
(`writing/index.html:81`). `work/index.html:103` opens "Field notes on shipping real systems"
with no subject. The JSON-LD Blog node (`index.html:287-303`) is fine but has no `sameAs`.
Fix (count per 05b C1, owner to confirm the figure):
> TechEarl (techearl.com) is a single-author developer publication I write: more than 600
> articles on Linux, DevOps, WordPress, application security, databases, and AI engineering,
> each written from work that reached production.

Put it first in the TechEarl entry on `/work/` and as the opening of `/writing/#summary`. Move
`https://www.facebook.com/thetechearl` from the Person `sameAs` (`index.html:67`) to this Blog
node's `sameAs`, since it is the TechEarl page, not a personal profile.

### "Ishan Karunaratne CTO": good
`about/index.html:90-95` (Chief Technology Officer, Rehab Media Group, 2021 to now), JSON-LD
`worksFor` + `hasOccupation` (`index.html:70-101`). Gaps: the start year exists only in the
visible track. Optional: express `worksFor` as a `Role` with `roleName: "Chief Technology
Officer"` and `startDate: "2021"` so the date is machine-readable. The CTO answer passage
would be stronger as one sentence near the top of `/about/`: "I have been Chief Technology
Officer at Rehab Media Group since 2021, after a year there as a senior engineer."

## Findings

| # | Sev | Page | file:line | Evidence | Fix |
|---|---|---|---|---|---|
| G1 | High | / , /work/ | `index.html:266-286,610`; `work/index.html:90` | "DNS Checker" never disambiguated from dnschecker.org; no "DNS Checker is" sentence; no alternateName | See query section |
| G2 | High | /work/, /writing/ | `work/index.html:103`; `writing/index.html:81` | No "TechEarl is" definition; the only definition carries the false 700+ | See query section |
| G3 | High | machine-read surfaces | `index.html:373`; `llms.txt:63`; `llms.txt:59` plus 8 page lines | Stale facts in the exact places answer engines read: What's Taller 293 (live: 550), TechEarl 700+ (repo: 647 published) | Correct per 05b F1, F2 |
| G4 | Medium | / | `index.html:40,603,607` | Two different career spans in the answer passage and JSON-LD | Use the sentence above everywhere |
| G5 | Medium | / | `index.html:67` | Person `sameAs` includes a TechEarl brand Facebook page; Threads (`:68`) is in `sameAs` but not in any visible `rel="me"` list | Move Facebook to the Blog node; add Threads to the footer "Elsewhere" list or drop it |
| G6 | Medium | off-site | techearl.com/author | TechEarl's author JSON-LD mints its own `@id` `https://techearl.com/author#person` and only lists ishankarunaratne.com in `sameAs`. Two Person nodes for one man; dnschkr.com already uses the canonical `@id` | On techearl.com, set the author Person `@id` to `https://ishankarunaratne.com/#person` (techearl repo, `lib/schema.ts`) |
| G7 | Medium | llms.txt | `llms.txt:5-7` | "connect millions of people" claim not on any page | Support on /about/ or remove (05b F7) |
| G8 | Medium | entity | none | No Wikidata item; brand-mention presence (Reddit, YouTube, Wikipedia) not measured here | Consider a Wikidata item with ORCID (P496), employer and the two websites; only facts already public. Run a DataForSEO LLM-mentions check before deciding on further off-site work |
| G9 | Low | /work/, /contact/ | `work/index.html:67,81`; `contact/index.html:64,77` | H1 and H2 identical | Rename the H2s (05b C11) |
| G10 | Low | /about/ | `about/index.html:221,241` | Question headings in third person ("What does he work on?") after a first-person answer | First-person headings and answers (05b C4); keep "Which Ishan Karunaratne is this?" as is, it is the best citable block on the site |
| G11 | Low | robots.txt | `robots.txt` | Names the retired tokens `Claude-Web` and `anthropic-ai`, not the current `Claude-SearchBot`/`Claude-User` (all are allowed through `*` anyway) | Optional tidy: replace with `Claude-SearchBot` and `Claude-User` |
| G12 | Low | / | `index.html:26-578` | Home JSON-LD has no `dateModified`; About's is 13 September. Freshness is a weak but real citation factor | Add `dateModified` to the ProfilePage node and keep it current |

`/work/` ranks 4.1 for the navigational query "jwaedge" (32 impressions, 0 clicks): people want
jwaedge.com itself, so no action.

## Top 5 changes by impact

1. Fix the false and stale numbers in JSON-LD and llms.txt first (G3), then on pages.
2. Disambiguate DNS Checker from dnschecker.org with a definition sentence, `alternateName`
   and an FAQ line (G1).
3. Add a "TechEarl is..." definition on `/work/` and `/writing/` (G2).
4. One canonical identity sentence, identical on every surface (G4).
5. Consolidate to one Person `@id` across techearl.com (G6) and clean `sameAs` (G5).

## Counts

High 3 (G1 to G3), Medium 5 (G4 to G8), Low 4 (G9 to G12).
