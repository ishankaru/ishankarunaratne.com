# 05b. Content quality and E-E-A-T (seo-content), 21 November 2026

Scope: `index.html`, `about/index.html`, `work/index.html`, `writing/index.html`,
`contact/index.html`, `404.html`, `llms.txt`, read from the working tree (matches the
live site: the stale "293" and "700 technical" strings are live). Read only; no site file
was edited. Scores are this skill's heuristics, not Google signals.

## Scores

| | Score |
|---|---|
| Content quality | 72/100 |
| Experience | 16/20 |
| Expertise | 20/25 |
| Authoritativeness | 13/25 |
| Trustworthiness | 20/30 |
| AI citation readiness | 70/100 |

**Who / How / Why.** Who: a strong answer (name, photo, ORCID, dated credentials, Army MOS,
an employer, a disambiguation FAQ). How: the site says how the writing is produced
(`writing/index.html:228-238`). Why: the site is clearly there to establish identity and
get engagements, which is fine. The weak points are numbers that have drifted from reality
and a lack of third-party corroboration.

## What is already strong

- The definition sentence sits in the first 30% of both identity pages
  (`index.html:606-610`, `about/index.html:81`) and is repeated in JSON-LD and `llms.txt:3`.
- The disambiguation answer (`about/index.html:228-238`) is specific, human, a bit funny,
  and gives a unique identifier (ORCID). Few personal sites do this well.
- The credentials have years (`about/index.html:169-206`) and match the `hasCredential` JSON-LD
  line for line (`index.html:102-151`) and `llms.txt:10-14`.
- The experience signals are first-hand: Lotus Domino at Charles Darwin University, 13P fire
  direction, the bus-factor aside on DNS Checker (`work/index.html:92`), "a technology leader
  who has not touched the stack in three years is guessing" (`index.html:632`).
- Per-site figures carry "as of" dates, and most agree across `/work/`, the home JSON-LD and
  `llms.txt` (240M domains a day, 14,333 providers, 228 seats / 15 brands / 71 recalls,
  521 / 2,005 / 250, 480 / 30 / 443).
- No em dashes, no `&mdash;`, and no invisible Unicode (zero-width, bidi, tag characters,
  NBSP) in any of the seven files. No stock AI vocabulary ("delve", "seamless", "leverage",
  "robust", "landscape", "testament" and similar: zero hits).

## Cross-page factual mismatches

| # | Sev | Fact | Where it says what | Truth / note |
|---|---|---|---|---|
| F1 | **High** | TechEarl article count | "700+" / "more than 700": `about/index.html:224`, `work/index.html:102`, `writing/index.html:7,15,33,69,73,81`, `404.html:111`, `llms.txt:59` | The TechEarl repo has **647** `status: published` articles (61 archived after the September consolidation, HEAD `bc720a002`). The live techearl.com sitemap has 664 single-segment URLs, which include category and static pages. "700+" is now false on nine lines. |
| F2 | **High** | What's Taller subject count | "550 real and fictional subjects": `work/index.html:159`. "293": `index.html:373` (JSON-LD), `llms.txt:63` | whatstaller.com shows "550 total" today, so `/work/` is right and the JSON-LD and llms.txt (the two places machines read) are stale. |
| F3 | Medium | TechEarl per-category size | "WordPress, Linux, DevOps, and application security, roughly 130 pieces each": `work/index.html:103` | Published counts: Linux 127, DevOps 124, WordPress 118, Security 103. "Roughly 130 each" overstates security by about 25%. |
| F4 | Medium | Length of career | "more than two decades": `index.html:40` (JSON-LD), `index.html:607` (lede). "Twenty-seven years": `index.html:603`, `index.html:630`, `about/index.html:7,70,81`, every footer, `llms.txt:3` | Not contradictory, but the masthead and the lede directly under it give two different spans. Pick one figure. |
| F5 | Medium | Degree name | "a bachelor's in computing": `index.html:638-639`. "Bachelor's degree, online systems": `index.html:105`, `about/index.html:172`. "Bachelor's degree": `llms.txt:10` | Use the credential name in both places. |
| F6 | Medium | ALD coverage | "51 states and DC": `index.html:413`, `work/index.html:169`, `llms.txt:66` | There are 50 states. If 51 means 50 states plus DC, write "all 50 states and DC" (owner to confirm the site actually covers all 50). |
| F7 | Medium | Rehab Media Group reach | "architects platforms that connect millions of people in the United States with addiction treatment...": `llms.txt:5-7` | Appears on no page. Either support it on `/about/` or drop it from llms.txt. I could not verify it. |
| F8 | Medium | "Latest writing" dates | Visible date is one day after the `datetime` on all five items: `writing/index.html:197` (datetime 2026-06-02, shown "3 June"), `:202`, `:207`, `:212`, `:217` | Article front matter is `2026-06-02T23:03-04:00`, so the `datetime` is right and the visible date is converted to UTC. Fix in `scripts/refresh-writing.mjs` (`fmt()` should format the local date part, as the `datetime` already does). |
| F9 | Medium | "Refreshed automatically from TechEarl each morning": `writing/index.html:191` | Newest item listed is 2 June 2026 | TechEarl has published since and the pages are live (200): `llm-batch-api`, `reduce-ai-api-costs`, `nano-banana-batch-api`, `bulk-process-wordpress-posts-ai` (30 June), `wordpress-code-snippet-sandbox` (23 August). Cause: `scripts/refresh-writing.mjs:59-61` keeps only the top `COUNT*3` sitemap entries by `lastmod` before sorting by `datePublished`; the bulk edits in September gave hundreds of older articles a newer `lastmod`, so newly published ones fall outside the window. Sort all priority-0.8 entries by `datePublished` (or widen the window a lot). |
| F10 | Low | Lotus credential name | "as a Principal Certified Developer": `about/index.html:158` vs "Principal Certified Lotus Professional": `about/index.html:188`, `index.html:141`, `llms.txt:12` | Use the credential name. |
| F11 | Low | Career framing | "from software engineer to Chief Technology Officer": `about/index.html:7,15,67`, `llms.txt:40` | No track entry is titled Software Engineer; the earliest is "Programmer and Network Administrator" (`about/index.html:156`). Fine as a loose phrase, but "from programmer to CTO" matches the track. |
| F12 | Low | Job title in titles | `index.html:6` "Systems and Network Architect, CTO" vs `about/index.html:6` "Systems Architect and CTO" | Minor; align if the title tags are touched anyway. |
| F13 | Low | Stale "as of" dates | `writing/index.html:143` most-read "as of 13 September 2026"; Lyrics LK and Chords LK counts `work/index.html:189,201`, `llms.txt:68-69` | Over two months old. README already describes the monthly refresh for the featured rows. |
| F14 | Low | Spelling | "analysing": `index.html:271`, `work/index.html:38`, `llms.txt:58`; "analyzes": `work/index.html:90`, `about/index.html:223`; "call-centre" `about/index.html:139`, "catalogues" `work/index.html:223`, `llms.txt:76` | Pick US spelling (the site is en-US). |
| F15 | Low | About freshness | `about/index.html:33,74` dateModified / "Updated" 13 September 2026; `sitemap.xml:4` lastmod 2026-09-20 | Align when /about/ is next edited. |

Consistent everywhere and verified against each other: "eighteen systems" (work meta, rail,
closer, ItemList of 18, `owns` list of 18, all six footers, `llms.txt:41`, 18 project lines);
240 million domains a day; Rehab Media Group CTO since 2021; Army 2002 to 2005; ORCID.

## Findings

### C1. High. TechEarl "700+" is false on nine lines (F1)
Pages: about, work, writing, 404, llms.txt. Evidence above. A count that a reader can
check against the TechEarl sitemap and find 50+ short undermines every other number on
the site. Fix: replace with the real figure, or a floor that stays true, for example
"more than 600 articles". Suggested `writing/index.html:81`:
> I write TechEarl, a single-author developer publication with more than 600 articles on
> Linux, DevOps, databases, application security, networking, WordPress, and AI engineering.

Update the deck (`:69`), metarail (`:73`), meta/OG descriptions (`:7,15`), JSON-LD (`:33`),
`about/index.html:224`, `work/index.html:102`, `404.html:111`, `llms.txt:59` in the same edit.

### C2. High. What's Taller count stale in JSON-LD and llms.txt (F2)
`index.html:373`, `llms.txt:63` say 293; the live tool and `/work/` say 550. Fix: change both
to 550.

### C3. Medium. Home lede and masthead disagree on the span (F4)
`index.html:603` "Twenty-seven years" then `index.html:607` "more than two decades". Fix:
> **Ishan Karunaratne is a systems and network architect and Chief Technology Officer**
> with twenty-seven years designing, building, and running production software, Linux
> systems, and DevOps infrastructure.

Same change in the JSON-LD `description` (`index.html:40`).

### C4. Medium. Voice switches inside one page
`about/index.html:215-218` answers in first person ("I am from Colorado"), then
`:221-225` and `:241-244` switch to "He built", "He is open to". The home lede
(`index.html:606-610`) is third person and the note beneath it first person. The one
third-person definition sentence per page is a deliberate citation pattern and worth
keeping; the FAQ answers should be first person to match the owner rule. Suggested
`about/index.html:221-225`:
> **What do I work on?** Software architecture and distributed systems, Linux and DevOps
> infrastructure, application security, and AI engineering. I built and operate DNS
> Checker, a domain intelligence platform that analyzes more than 240 million domains a
> day, and I write TechEarl.

and `:241-244`:
> **Am I available for work?** Yes, for hands-on development work, which is still the part
> I enjoy most, as well as advisory work, technical due diligence, architecture review, and
> fractional CTO engagements. Email is the fastest way to reach me.

### C5. Medium. Thin internal linking in body copy
- Home body (`index.html:605-674`) links only to `/contact/` (twice) and `/writing/`. No
  contextual link to `/about/` or `/work/`; "Read the writing" (`:615`) leaves for techearl.com.
  Fix: link "Twenty-seven years" (`:630`) to `/about/#track`, and add "the
  [eighteen systems I built and still run](/work/)" to the lede after DNS Checker.
- About body has no link to `/work/` or `/writing/`; "DNS Checker" and "TechEarl" in
  `about/index.html:222-225` are plain text. Link them to `/work/` and `/writing/`.
- Contact body (`contact/index.html:75-91`) has no internal link; the page is a dead end
  apart from nav. Add one line linking `/work/` and `/about/` ("If you want to judge fit
  first, the work and the career are here.").
- `/work/` and `/writing/` already cross-link well with descriptive anchors
  (`work/index.html:68,271,302`, `writing/index.html:229,237`).

### C6. Medium. SEO-pattern copy on the newest /work/ entries
The Kendraya, ChalkStash, Energy Drink Flavors and What's Taller blurbs
(`work/index.html:112-113,122-123,132-133,160-161`) carry 8 to 10 exact-match commercial
anchors each, some ungrammatical because they mirror the query: "the [zodiac signs dates]"
(`:113`), "[Whats Taller]" (`:160`), "settle [what is taller]" (`:161`). The older entries
(Lipwalk, ALD, WPPaste) read like a practitioner describing a project. On a personal
profile site, keyword-shaped anchors read as link placement rather than description.
Fix: keep two or three anchors per entry and phrase them as natural English ("zodiac sign
dates", "What's Taller"), and drop the duplicate home-page anchor in `:161`.

### C7. Medium. Latest-writing block stale and mis-dated (F8, F9)
See the table. The claim "refreshed automatically each morning" is visibly untrue to anyone
who knows TechEarl. Fix the script; until then, soften `writing/index.html:191` to "Pulled
from TechEarl's sitemap" without the cadence claim.

### C8. Medium. Trust: analytics with no privacy notice
Every page loads GA4 (`G-11XFYLQ238`, e.g. `index.html:580-587`) and the site has no privacy
page or notice. For a person selling advisory work, this is a trust gap and possibly a
compliance one. Fix: a short `/privacy/` page linked from the footer, per
`~/dev/SITE-PRIVACY-PLAYBOOK.md`.

### C9. Medium. Authority claims without evidence
- `about/index.html:103` "Supported a 250%+ month-over-month revenue increase inside the
  first six months" is ambiguous (a sustained 250% monthly growth rate, or one month's
  jump?). Rephrase only with the owner's confirmation of what it measured.
- `index.html:653-655` M&A integrations and cloud migrations are claimed with no example. One
  sentence of non-confidential specifics (what was merged, what moved, what broke) would be
  the strongest Experience signal on the site. Owner input needed; do not invent.
- No third-party corroboration anywhere (talks, interviews, press, client quotes). This caps
  Authoritativeness. Nothing to fix in copy; it is an off-site task.

### C10. Low. Repeated "3am" motif
`index.html:649`, `index.html:673`, `about/index.html:234`, `writing/index.html:91`. Four uses
across the site turn a good line into a tic. Keep the one in the closer (`index.html:673`) and
the disambiguation joke; change the other two.

### C11. Low. Duplicate H1/H2 text
`work/index.html:67` and `:81` are both "Built and still running"; `contact/index.html:64` and
`:77` both "Get in touch". Drop the H2 or make it describe the section ("Eighteen systems",
"Email and profiles").

### C12. Low. Boilerplate
The footer blurb and link columns are identical on all six pages (about 60 words). That is
normal sitewide chrome and not a duplicate-content problem; no change needed. The repeated
definition sentence on home, about and llms.txt is intentional and fine once C3 aligns it.

### C13. Low. Page purpose
Each page has one clear job. Search Console shows "ishan karunaratne" on both `/`
(74 impressions, position 1.4) and `/about/` (27, position 6.4); home wins, so this is not a
problem, just keep `/about/` focused on the career and FAQ rather than restating the
home definition at more length.

## Counts

High 2 (C1, C2), Medium 7 (C3 to C9), Low 4 (C10 to C13). Cross-page mismatches: 15 (F1 to
F15; 2 High, 7 Medium, 6 Low).
