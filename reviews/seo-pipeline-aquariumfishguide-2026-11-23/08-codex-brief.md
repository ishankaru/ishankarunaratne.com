You are an independent reviewer. Another model wrote or edited the content below. Your job is to
find what it got wrong. You must not edit, create or delete any file. Print your review as your
final answer.

## Scope

- Project: ishankarunaratne.com, the static personal site of Ishan Karunaratne. Hand-written HTML,
  GitHub Pages, no build. `git diff` shows uncommitted edits: two new projects, Ice Cream Maker Heaven
  (already reviewed, ignore except for consistency) and **Aquarium Fish Guide
  (https://aquariumfishguide.com/, launched 2026-11-23)**, and the project count changed to twenty
  on every page.
- Files: work/index.html (new <article> after Ice Cream Maker Heaven, ItemList position 7,
  renumbered list), index.html (new WebSite node #aquariumfishguide and owns ref), llms.txt,
  sitemap.xml, 404.html, about/, contact/, writing/ footers.
- Project rules: no FAQPage JSON-LD; never rename the #person @id; first person singular; no em
  dashes; never invent numbers or experience. Keyword-shaped anchors on /work/ entries are a
  deliberate owner decision (chosen by US search volume, each pointing at the page that owns the
  phrase); report an anchor only if its target page does not match the phrase.

## Part 1: facts

Check every claim in the Aquarium Fish Guide entry, its ItemList description, the home JSON-LD
node and the llms.txt line against the live site: 67 fish, 55 freshwater and 12 saltwater; the four
readings (stocking at adult size counted by body weight, eats or nips, one temperature, full weight
on the stand) and the running cost; what can be added (tank, stand, fish, sand, rocks, plants,
gear); care page contents (tank mates, common mistakes, sources); the weight chart and stands
compared by top size and rated load; the substrate calculator giving pounds and bags. The sentence
"I have kept freshwater fish since I was a kid" must be supported by the site's own About page.
Check every link target exists and matches its anchor. Sources: https://aquariumfishguide.com/ ,
/fish/ , /stands/ , /sand-and-gravel/ , /about/ , /llms.txt , /sitemap.xml and the linked pages.
Confirm no "eighteen" or "nineteen" project count remains and every count reads twenty
consistently with the ItemList (20 systems).

## Part 2: architecture

Is the new entry consistent with the other entries (structure, JSON-LD agreeing with visible copy,
@id graph)? Any problem with the ordering ("largest first") at position 7?

## Output format

[SEVERITY] <file or URL>
Claim: "<exact quote>"
Problem: ...
Correction: ...
Source: <URL>

SEVERITY is one of ERROR, STALE, IMPRECISION, VERIFIED-CORRECT, NEEDS-MANUAL-CHECK. Every disputed
claim needs a source URL. Precision over volume. End with a one-line count per severity.
