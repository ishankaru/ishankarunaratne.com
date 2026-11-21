# 05e Agentic readiness: ishankarunaratne.com (2026-11-21)

Method: `seo-agentic` skill. `lighthouse_agentic.py --strategy both` (PSI, Lighthouse 13.6.0, fetched
2026-11-21 15:46 UTC), `agentic_check.py` (no `--ua-matrix`; the WAF user-agent probe was not run),
`agent_ux_check.py` on all five pages, a manual `Accept: text/markdown` request, and a line-by-line
comparison of `llms.txt` against the live pages and the sites it describes.

## Summary

- **Lighthouse Agentic Browsing: 3/3 mobile, 3/3 desktop** (Lighthouse 13.6.0, 2026-11-21). Counted
  audits: `agent-accessibility-tree` pass, `cumulative-layout-shift` pass (0), `llms-txt` pass.
  The WebMCP audits and `ard-schema` are N/A (no forms, no tools, no catalog), which is correct for
  a static profile site.
- **Agent-UX heuristic (local, 0-100): 100 on every page.** Zero unnamed interactive nodes, zero
  div-onclick widgets, no forms, real `<a>` links only (31 on `/`, 163 on `/work/`).
- **P0 failures: 0.** Content is server-rendered (559 words on `/` with no JS), robots.txt is
  reachable and allows everything, unknown URLs return a real 404 (no catch-all 200).
- What most limits agents today is not access but **accuracy**: `llms.txt` states two facts that
  the site's own pages or the target sites contradict, and it points agents at a domain that does
  not resolve.

## Lighthouse Agentic Browsing detail

| Audit | Mobile | Desktop | Note |
|---|---|---|---|
| agent-accessibility-tree | pass | pass | 33 axe rules, none failed |
| cumulative-layout-shift | pass (0) | pass (0) | |
| llms-txt | pass | pass | H1, Markdown links, >50 chars |
| webmcp-form-coverage / registered-tools / schema-validity | N/A | N/A | no forms, no tools |
| ard-schema | N/A | N/A | `/.well-known/ai-catalog.json` 404, not signalled |

Paths that would add a counted audit (options, not goals): publishing WebMCP tools or an
ai-catalog.json. Neither fits this site: there is no form, search or transaction to expose and no
agent resource to list. Recommend neither.

## Critical

None.

## High

None of its own. The dead InsideDNS domain (05a H-1) also affects agents: `llms.txt:72` sends them to
a host that returns SERVFAIL. Fix it there.

## Medium

### M-1. llms.txt states counts the site itself contradicts
- **Page:** `/llms.txt`
- **Where and evidence:**
  - `llms.txt:59` "TechEarl ... 700+ single-author articles": techearl.com's live sitemap lists 647
    articles (05d M-3). Same claim on `/writing/`, `/work/`, `/about/`.
  - `llms.txt:63` "What's Taller? ... 293 real and fictional subjects": `/work/` says 550
    (`work/index.html:159`, corrected in commit 5dd7b5c) and whatstaller.com shows "550 objects
    total". The homepage schema still says 293 too (`index.html:373`).
- **Why it matters here:** this file exists to be quoted verbatim by assistants and it carries a
  citation policy. A number that disagrees with the linked page is the claim most likely to be
  repeated and least likely to be noticed.
- **Fix:** 700+ to 600+ (or "about 650") in `llms.txt:59` and the pages listed in 05d M-3; 293 to
  550 in `llms.txt:63` and `index.html:373`. Then add "llms.txt" to whatever checklist updates the
  /work/ counts, since this is the second count that was fixed on the page but not here.

## Low

1. **No Markdown delivery.** `Accept: text/markdown` on `/` returns `text/html` with only
   `Vary: Accept-Encoding` (the check script reports `vary_accept: true` because it substring-matches
   `Accept-Encoding`; the response does not vary on `Accept`). `/index.md` is 404. GitHub Pages
   cannot content-negotiate, so the only route is static `.md` siblings (`/about/index.md` etc.) plus
   `<link rel="alternate" type="text/markdown" href="...">` in each head. The site has no `.nojekyll`,
   so Jekyll is active: Markdown files *without* front matter are copied through as-is, which is what
   you want, but verify the served content type after deploying one. Optional; `llms.txt` already
   gives agents a clean text summary of the whole site.
2. **robots.txt names retired Anthropic tokens and misses the current ones.** `robots.txt:16-20`
   carries `Claude-Web` and `anthropic-ai` (no longer used); `Claude-SearchBot` (Claude search
   citability) and `Claude-User` (user-triggered) have no named group. They fall through to
   `User-agent: *` / `Allow: /`, so access is identical today. Swap the two retired groups for
   `Claude-SearchBot` and `Claude-User` so the file documents the intended policy.
3. **No Content-Signal.** No `Content-Signal:` line in any group. Optional and not read by Google
   Search. If training use should be stated explicitly, add e.g.
   `Content-Signal: search=yes, ai-input=yes, ai-train=yes|no` under `User-agent: *`; the training
   value is your call (every AI crawler, including GPTBot and Google-Extended, is currently allowed,
   which reads as "yes").
4. **No `/.well-known/security.txt`** (404). Not an agent requirement; a two-line file with the contact
   address is a cheap trust signal for a security-focused author.
5. **"Facebook: TechEarl page" under Profiles** (`llms.txt:53`) is labelled honestly here, but the
   same URL is asserted as the Person's `sameAs` in the schema (05d M-1). Keep llms.txt as is; fix the
   schema.

## Access policy

- **Training:** allowed. `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended` all `Allow: /`
  (`robots.txt:4-35`). No Content-Signal stating otherwise.
- **Search / citation:** allowed. `OAI-SearchBot`, `PerplexityBot`, `Applebot` named and allowed;
  `Claude-SearchBot` allowed through `*`.
- **User-triggered agents:** allowed. `ChatGPT-User`, `Perplexity-User` named and allowed;
  `Claude-User`, Google-Agent allowed through `*` (Google's user-triggered fetchers ignore robots.txt
  regardless). Nothing private on the site relies on robots.txt.
- **WAF:** not tested (no `--ua-matrix` run). GitHub Pages has no bot challenge; PSI and
  CloakBrowser fetches were served normally.

## Standards status (checked 2026-11-21)

WebMCP: draft (W3C Community Group), not applicable here. Content-Signal: Cloudflare policy plus an
IETF draft, a preference not an enforcement, ignored by Google Search. llms.txt: community proposal,
counted by Lighthouse 13.6.0 but not used by Google Search. ARD / ai-catalog.json: proposal, N/A.

## Healthy (checked, no action)

- **llms.txt structure:** H1, blockquote summary, prose identity, disambiguation, citation policy,
  `## Pages`, `## Profiles`, `## Projects`, `## Optional` with Markdown links throughout; 8.9 KB,
  served `text/plain; charset=utf-8`. Every other link in it returns 200, including the Kendraya,
  ChalkStash and Energy Drink Flavors deep links (Kendraya is now live and indexable, which closes the
  open item from the 2026-10-01 pass).
- **llms.txt facts that match the pages:** current role at Rehab Media Group, Army service 2002-2005
  as 13P with OIF deployment, the eight credentials and years, ORCID, the disambiguation names,
  contact address `ishan@techearl.com` (same as `/contact/`), DNS Checker's 240 million domains,
  Daycare Index 14,333, BabyCarSeat 228 models, Lyrics LK 10,225/3,390, Chords LK 1,700+, JWA Edge
  521/2,005/250, Energy Drink Flavors 480/30/443, ChalkStash about 1,300, the eighteen-system count.
- **llms-full.txt** is absent (404); not needed at this size.
- **Accessibility tree:** landmarks on every page (10 to 29), skip link, `aria-current` on the active
  nav item, `aria-label="Primary"` on the nav, one H1 per page, axe-core clean (see 05a).
- **Real 404:** probe URL returned 404, so Lighthouse's `llms-txt`/`ard-schema` are not fooled by a
  catch-all.

## Severity counts

Critical 0, High 0 (InsideDNS counted in 05a), Medium 1, Low 5.
