You are an independent reviewer. Another model wrote or edited the content below. Your job is to
find what it got wrong. You must not edit, create or delete any file. Print your review as your
final answer.

## Scope

- Project: ishankarunaratne.com, the static personal site of Ishan Karunaratne. Hand-written HTML,
  GitHub Pages, no build. `git diff` shows today's edits: a new project, Ice Cream Maker Heaven
  (https://icecreammakerheaven.com/, launched 2026-11-22), was added, and the project count changed
  from eighteen to nineteen on every page.
- Files: work/index.html (new <article> after Energy Drink Flavors, ItemList position 6, renumbered
  list), index.html (new WebSite node #icecreammakerheaven and owns ref), llms.txt, sitemap.xml,
  404.html, about/, contact/, writing/ footers.
- Project rules: no FAQPage JSON-LD; never rename the #person @id; first person singular; no em
  dashes; never invent numbers. Keyword-shaped anchors on /work/ entries are a deliberate owner
  decision (anchors were chosen by US search volume, each pointing at the page that owns the
  phrase); report an anchor only if it points at a page that does not match the phrase.

## Part 1: facts

Check every claim in the new entry, the ItemList description, the home JSON-LD node and the
llms.txt line against the live site: 59 machines, 21 brands, 7 Ninja CREAMi, 36 ice cream makers,
5 soft serve, 11 old-fashioned, 41 recipes, "specs from the maker's page or manual, or the Amazon
listing", "nothing tested or rated", Deluxe 24 oz XL tubs, machine finder "three questions",
compare tool, and every link target (does each URL exist and match its anchor). Sources:
https://icecreammakerheaven.com/ , /llms.txt , /sitemap.xml , /about/ and the linked pages.
Also confirm no "eighteen" is left and every count reference reads nineteen consistently with the
ItemList (19 items).

## Part 2: architecture

Is the new entry consistent with the other entries (structure, JSON-LD agreeing with visible
copy, @id graph)? Does "largest first" ordering still hold reasonably with the new entry at
position 6?

## Output format

[SEVERITY] <file or URL>
Claim: "<exact quote>"
Problem: ...
Correction: ...
Source: <URL>

SEVERITY is one of ERROR, STALE, IMPRECISION, VERIFIED-CORRECT, NEEDS-MANUAL-CHECK. Every disputed
claim needs a source URL. Precision over volume. End with a one-line count per severity.
