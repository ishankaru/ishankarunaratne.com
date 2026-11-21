# Step 3, INTENT (SXO), 21 November 2026

SERP-backwards check of page type against what the SERP rewards. Only one query has real data
on both sides: **"ishan karunaratne"** (GSC + live US SERP). No role query has any first-party
data, so role queries are assessed only for what the pages should say to referral visitors,
not for ranking.

## What the name SERP rewards

Ten of ten organic results are **single-person profile pages**: social profiles (Threads,
Facebook, Instagram, LinkedIn x3), a government registry record (Companies House), and an
employer expert bio (rehab.com). Plus an AI Overview and an Images pack. Dominant type:
**profile / about-a-person page with a face, a name-as-H1, a job title, and an affiliation.**
No portfolio, blog index or contact page appears.

User story: "Someone mentioned Ishan Karunaratne (a CTO, the DNS Checker person) and I want to
confirm who he is, what he does, and that he is credible, then maybe reach him."

## Page-by-page type check

| Page | Current type (schema / H1) | SERP-expected type for its query | Verdict |
|---|---|---|---|
| `/` | `ProfilePage` + Person; H1 "Ishan Karunaratne" | profile | **ALIGNED** |
| `/about/` | `ProfilePage`; H1 "About Ishan Karunaratne"; career, credentials, FAQ | profile (same query) | **MISMATCH: duplicate shape** |
| `/work/` | `CollectionPage` + ItemList; H1 "Built and still running" | for "jwaedge": the brand's own site; for "who built X": a profile or project page naming the person | OK as a portfolio; the jwaedge traffic is not its intent |
| `/writing/` | `CollectionPage`; H1 "Writing by Ishan Karunaratne" | for "techearl": techearl.com | ALIGNED as a hub; must not compete for "techearl" |
| `/contact/` | `WebPage`; H1 "Get in touch" | transactional, referral-driven | ALIGNED |

## Top-priority flag: two ProfilePages for one person

`/` and `/about/` both declare `ProfilePage` and both target the name. GSC shows Google
splitting the query between them (`/` 74 impr pos 1.4, `/about/` 27 impr pos 6.4), and Bing on
23 October surfaced `/about/`, `/writing/` and `/contact/` at 16 to 24 rather than `/`. Two
profile-shaped pages leave the engines to choose the canonical one, and the entity signal
(which URL *is* Ishan Karunaratne) is diluted at exactly the moment the non-personalised US
SERP does not show the site at all.

This is benign when the home page sits at 1 and `/about/` shows as a second listing, which is
what personalised GSC shows. It is harmful in the cold SERP where neither page makes the top
10. Priority: **high**, because it is the only shape issue on the one query that matters.

Direction for the Optimize step (not applied here):
- Keep `/` as the single `ProfilePage` whose `mainEntity` is `#person`.
- Recast `/about/` as `AboutPage` (or plain `WebPage`) about the career, with `about` /
  `mainEntity` referencing `#person` by `@id` rather than a second ProfilePage, a title led by
  the long-tail it actually answers ("career", "CTO", "US Army veteran", "credentials"), and a
  prominent link back to `/` as the profile.

## Second flag: the profile is not shaped like what wins (signals, not type)

The type on `/` is right; what the winners have and `/` lacks is **corroboration and
disambiguation**:

| Signal the winning profiles carry | `/` today |
|---|---|
| Photo of the person (Images pack is on the SERP) | check in step 4; Images pack shows other people |
| Clear "which one" identity line (location, employer, role) | role and employer yes; no explicit disambiguation from the Sri Lankan developer or the UK officer |
| Hosted on or linked from an authoritative domain | rehab.com bio ranks #5 but is missing from `sameAs` and does not link back |
| LinkedIn profile on page one | my LinkedIn is absent; other people's are present |

These are hand-offs to `seo-geo` / `seo-schema` (sameAs, disambiguation) and to off-site work
(rehab.com bio link, LinkedIn website field), not page-type changes.

## Persona scoring (short)

| Persona | Lands on | Need | Score (/100) | Gap |
|---|---|---|---|---|
| Referred prospect checking credibility | `/` | who, what now, proof, reach | 80 | proof exists; check in step 4 how quickly the "Work with me" offer and `/contact/` link are reached |
| Recruiter / partner verifying background | `/about/` | career, credentials, dates | 75 | competes with `/` instead of being the depth page `/` links to |
| AI answer engine resolving "ishan karunaratne" | `/`, llms.txt | one canonical entity, unambiguous | 65 | two ProfilePages, no disambiguation, missing rehab.com sameAs |
| Visitor looking for JWA Edge | `/work/` | the JWA Edge site | 40 | not this site's job; fix jwaedge.com's own brand ranking |

## Role queries (no data, scope note)

"fractional cto" and "fractional cto services" SERPs are agency and marketplace territory, a
different page type (service landing / listicle). Building a service landing page on a
personal site to chase them would be a page-shape mismatch by design. Keep the offer as copy on
`/` and `/contact/` that converts referral traffic; do not target it.
