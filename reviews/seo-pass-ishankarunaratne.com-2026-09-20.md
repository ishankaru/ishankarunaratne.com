# SEO pass, ishankarunaratne.com, 20 September 2026

Adding three new properties to `/work/`: babycarseat.info, insidedns.com, jwaedge.com.

## Data pulled first

```
gsc-striking-distance.mjs --site babycarseat.info 90 1   ->  0 clicks, 0 impressions
gsc-striking-distance.mjs --site jwaedge.com     90 1   ->  0 clicks, 0 impressions
gsc-striking-distance.mjs --site insidedns.com   90 1   ->  no GSC property shared with any key
gsc-page-queries.mjs --site ishankarunaratne.com /work/ 180  ->  no impressions for this URL
```

All three sites are too new to have a query profile, and `/work/` itself still has none, so
there is no CTR-gap, striking-distance or cannibalization work available. Keyword selection
therefore came from DataForSEO volume rather than from first-party data, which is the
documented fallback. Total spend $0.26.

### What the volume says (US, `keyword_suggestions` + `ranked_keywords`)

**babycarseat.info** is the only one of the three in a high-volume market, and the volume is
in the seat *types* and the *law* pages, not in the word "compare":

| Query | Volume | KD |
|---|---|---|
| infant car seat / rear facing infant car seat | 110,000 / 135,000 | 21 / 14 |
| convertible car seat | 110,000 | 5 |
| booster seat / high back booster seat | 110,000 | 14 / 0 |
| baby car seat | 40,500 | 23 |
| booster seat requirements | 27,100 | 26 |
| all in one car seat | 6,600 | 19 |
| car seat laws (+ state tail: CA 9,900-18,100, FL 6,600, TX 5,400, MI 5,400) | 5,400 | 46 |
| evenflo / graco car seat recall | 8,100 / 5,400 | 1-8 |
| compare car seats | 480 | 5 |

So the card leads on the type words and names the laws and recall pages explicitly. "Compare"
is real but tiny; it is the product's mechanic, not its keyword.

**jwaedge.com**: "jurassic world alive" 8,100 (KD 30), "jurassic world alive dinodex" 590
(KD 0), "jurassic world alive hybrids" 320 (KD 0), "jurassic world alive dinosaurs" 260 (KD 0).
A `ranked_keywords` pull on the incumbent, paleo.gg (6,623 ranked keywords), shows where the
traffic actually is: bare *creature-name* queries landing on their dinodex, e.g. "mutadon"
14,800 at #16, "dimorphodons" 14,800 at #12, "diabloceratops" 6,600 at #18. The card therefore
names the creature/hybrid/ability nouns and the 521-creature scale rather than the brand.

**insidedns.com**: a genuinely thin market. "dns game" 480 (KD 0), "how dns works" 320 (KD 22),
"dns quiz" 20, "learn dns" 40 (KD 53). Note the trap: "best dns for game" carries 1,000 but is
a different intent entirely (gaming resolvers, not a game about DNS) and is deliberately not
targeted. The card uses "DNS game", "learn DNS" and "how DNS works" and nothing else.

## Changes made

### `/work/` (the ask)

Three cards added, each with a verified screenshot at 1200x750 and every outbound link
checked 200 (19 links):

- **BabyCarSeat.info**, after American Lawyers Directory. Leads with the manual-derived
  catalog (228 models, 15 brands), links the three type hubs (infant, convertible, booster)
  and the comparison tool, then gives the second paragraph entirely to the two reference
  pages that carry the search volume: US car seat laws by state and the NHTSA recall list
  (71 recalls since 2010, refreshed daily). States plainly that there is no hands-on or
  crash testing, which is the site's own standing editorial rule.
- **JWA Edge**, after Chords LK. Leads with the provenance claim that actually differentiates
  it from paleo.gg and the wikis (521 creatures, 2,005 abilities, 250 fusion recipes exported
  from the game's own data and regenerated each patch), then links hybrids, abilities,
  compare, raids and tournaments.
- **InsideDNS**, after Dr Pepper Addiction. Names all three games and the twelve-mission
  learning path, carries the honest limitation on learning records (browser-local,
  self-reported, not a verified qualification), and links across to DNS Checker, which is the
  useful internal connection: the teaching half of what dnschkr does in production.

Also on `/work/`: meta description and `og:description` rewritten to carry the two new
entity names (153 chars), `CollectionPage` `dateModified` to 2026-09-20, metarail count and
closer line to fifteen, and the `ItemList` rebuilt **from the card order in the document** so
the two cannot drift apart again.

### Sitewide

- "All twelve systems" to "All fifteen systems" in the footer of all six pages, and the 404
  card blurb.
- Homepage entity graph: three new nodes (`#babycarseat`, `#jwaedge`, `#insidedns`) and three
  new `owns` refs on the Person, inserted in the same order as the work-page cards. Verified
  no dangling refs and all JSON-LD parses.
- `llms.txt`: the three properties added to the Projects list with their real numbers.
- `sitemap.xml`: `lastmod` bumped to 2026-09-20 on all five URLs.

Render-checked at 1440 and 390: 15 cards, no horizontal overflow, no broken images, no
console errors beyond the GA4 beacon that localhost blocks.

## Findings on the three sites themselves (not fixed here)

1. **jwaedge.com has no creature-index URL.** `/dinodex`, `/creatures`, `/dinosaurs` all 404;
   the guide lives on `/`. "jurassic world alive dinodex" is 590/mo at KD 0 and paleo.gg owns
   it with a URL literally called `/dinodex`. A `/dinodex` route (canonical, or the index
   moved there with `/` linking in) is close to free. **Highest-value item on this list.**
2. **insidedns.com serves no `/sitemap.xml`.** It also has no GSC property shared with any
   service-account key, so none of the reporting works against it. Both worth fixing before
   anything else is written for it.
3. **insidedns.com's market is small.** "dns game" at 480/mo is the ceiling on the arcade
   framing. If the site is meant to earn search traffic rather than just exist, the
   volume is on the teaching side ("how dns works", 320, plus the long tail of specific
   record-type and resolution questions), which argues for the learning path becoming the
   indexable surface and the games being the hook.
4. **babycarseat.info's laws page is one page for a per-state query set.** California alone
   is 9,900-18,100/mo and Florida, Texas and Michigan are 5,400-6,600 each, all at KD 0-7.
   The project rule is deliberately one page with anchors, which is a defensible call against
   thin state pages, but it does mean one URL competing for fifty distinct queries. Worth
   revisiting with real GSC data in a few months.
5. **babycarseat.info publishes no personal byline by project rule**, while this site now
   claims ownership of it in `owns` and on `/work/`. That is consistent (the rule is about not
   implying reviewer expertise on the car-seat site, not about concealing who built it), but
   flagging it since the two claims now coexist publicly.

## Resubmit

Not yet submitted; the commit is local and unpushed pending the `gh` identity mismatch noted
below. After deploy:

```sh
S=~/.claude/skills/ik-super-seo/scripts
C=~/dev/node/2026/babycarseat.info/sa-creds
node $S/google-index-submit.mjs --site ishankarunaratne.com --creds $C \
  https://ishankarunaratne.com/ https://ishankarunaratne.com/work/ https://ishankarunaratne.com/about/ \
  https://ishankarunaratne.com/writing/ https://ishankarunaratne.com/contact/
node $S/indexnow-submit.mjs --site ishankarunaratne.com <same urls>
```

Re-run `gsc-page-queries.mjs --site ishankarunaratne.com /work/ 180` in two to four weeks.
Re-run the striking-distance report on babycarseat.info and jwaedge.com then too; both should
have a first query profile by that point.

## Identity note

At the time of this pass, `git config` in this repo is correct (`ishankaru
<ishankaru@gmail.com>`, matching every prior commit), but the `gh` CLI active account is
`ishanrmn`, not `ishankaru`. The remote is HTTPS, so a push would go through the gh credential
helper under the wrong account. Committed locally and stopped there rather than switching the
account unprompted.
