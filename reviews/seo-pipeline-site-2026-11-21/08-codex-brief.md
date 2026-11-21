You are an independent reviewer. Another model wrote or edited the content below. Your job is to
find what it got wrong. You must not edit, create or delete any file. Print your review as your
final answer.

## Scope

- Project: ishankarunaratne.com, the static personal site of Ishan Karunaratne (systems and network
  architect, CTO at Rehab Media Group, writer of TechEarl, sole developer of DNS Checker at
  dnschkr.com, owner of eighteen sites listed on /work/). Hand-written HTML, GitHub Pages, no build.
- Pages or files to review (working tree in this directory; `git diff` shows today's edits, review
  the edited state and the surrounding page):
  - index.html (home, carries the canonical Person graph `https://ishankarunaratne.com/#person`)
  - about/index.html
  - work/index.html
  - writing/index.html
  - contact/index.html
  - 404.html
  - llms.txt, robots.txt, sitemap.xml
  - scripts/refresh-writing.mjs and .github/workflows/refresh-writing.yml (rewritten today to cache
    article publish dates in scripts/writing-dates.json)
- Primary query and intent: `/` and `/about/` "ishan karunaratne" (navigational, person profile;
  `/` is the single ProfilePage, `/about/` is now an AboutPage with the Person declared inline under
  the same @id). `/work/` portfolio of systems. `/writing/` TechEarl summary. `/contact/` contact.
- Project rules that override generic SEO advice: no FAQPage JSON-LD; never rename the `#person`
  @id; first person singular in copy ("I"), never "we"; no em dashes; never invent experience,
  numbers or credentials. The keyword-shaped anchors on /work/ project entries are a deliberate
  owner decision; do not report them.

## Part 1: facts (per page)

Extract every concrete, checkable claim and verify the suspect ones against an authoritative,
current source. Today's edits changed these, check them first:

- TechEarl article count now "600+" / "more than 600" (was 700+); check https://techearl.com/sitemap.xml
  (articles are priority 0.8 entries).
- TechEarl categories "Linux, DevOps, WordPress, and application security, more than 100 pieces each".
- What's Taller subject count now 550 (was 293); check https://whatstaller.com/.
- American Lawyers Directory "all 50 states and DC"; check https://americanlawyersdirectory.com/.
- "twenty-seven years" replacing "more than two decades"; degree named "online systems" everywhere.
- DNS Checker is dnschkr.com and not dnschecker.org (new FAQ and llms.txt line).
- New Person sameAs https://www.rehab.com/expert/ishan-karunaratne; Facebook page moved from the
  Person sameAs to the TechEarl Blog node.
- The "Latest writing" list on /writing/ and its dates against the articles' own datePublished.
- Every other per-site figure on /work/, the home JSON-LD and llms.txt against the live site it
  describes (DNS Checker 240 million domains a day, Daycare Index 14,333, BabyCarSeat 228/15/71,
  JWA Edge 521/2,005/250, Energy Drink Flavors 480/30/443, Lyrics LK, Chords LK, etc.).
- Also review the refresh script change for bugs (cache pruning, date formatting, workflow commit).

## Part 2: architecture (across pages)

- Does each page have one clear primary query and intent, and does its structure match that intent?
- Does another page on the site already target the same query and intent (cannibalization)?
- Are the title, meta description, canonical and structured data specific to each page, and do they
  agree with the visible content? Is every JSON-LD value visible on its page? Is the @id graph
  consistent across pages?
- Are internal anchors descriptive, and is every page reachable from body copy, not only the nav?

## Output format

One finding per item, grouped by page, most severe first:

```
[SEVERITY] <file or URL>
Claim: "<exact quote from the content>"
Problem: <why it is wrong, stale or misleading>
Correction: <the corrected value or the structural fix>
Source: <URL that supports the correction>
```

SEVERITY is exactly one of:

- ERROR: factually wrong right now
- STALE: was true once, outdated today
- IMPRECISION: misleading or overstated, not flatly wrong
- VERIFIED-CORRECT: looked suspect, was checked, holds up (list these, they prove what was checked)
- NEEDS-MANUAL-CHECK: could not be verified, say what blocked you

## Rules

- Every disputed claim needs a source URL. No source, no finding.
- If you cannot reach a source, use NEEDS-MANUAL-CHECK. Never guess.
- Precision over volume. Do not pad the review with style nitpicks or theoretical concerns. A page
  that is clean should be reported as clean.
- Do not rewrite the content. Report only.
- End with a one-line count per severity.
