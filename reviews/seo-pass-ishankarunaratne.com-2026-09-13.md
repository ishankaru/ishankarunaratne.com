# SEO pass, ishankarunaratne.com, 13 September 2026

## Data pulled first

`gsc-striking-distance.mjs --site ishankarunaratne.com 180 5`

Window 2026-03-18 to 2026-09-14. 13 clicks, 64 impressions, 4 query/page pairs.
The site is too new to have a query profile, so there is no CTR-gap or NEARBY work
to do. Two things the data does say:

- **STRIKING**: `ishan karunaratne` sits at position 6.4 on `/about/` with 27 impressions
  and 1 click.
- **CANNIBALIZATION**: the same query is split across two URLs. `/` holds position 1.5
  (35 impr, 12 clicks) and `/about/` position 6.4 (27 impr, 1 click).

With no query data to optimize against, the lever on a five-page site is internal
linking and entity consolidation, not copy tuning.

## Changes made

### Footer rebuilt (every page: /, /about/, /work/, /writing/, /contact/, 404)

Was two lines: a copyright and the bare domain. Now a four-column footer carrying
18 links, which on a site this size is the primary crawl and equity surface.

- **Identity block**: name linking home, the role sentence, and the ORCID iD as a link.
  ORCID is the disambiguator against the two other Ishan Karunaratnes the Person schema
  already calls out, so it belongs on every page, not only the About page.
- **This site**: five internal links with descriptive, varied anchors, "Career and
  credentials", "Projects and stack", "Technical writing", "What I write about"
  (deep link to `/writing/#topics`), "Contact and availability". Deliberately not the
  same wording as the top nav, so the two link sets are not duplicate anchors.
- **Built and running**: five deep links into the owned properties, plus "All twelve
  systems" back to `/work/`. Deep links, not homepages: `dnschkr.com/dns-inspector`,
  `lipwalk.com/docs`, `whatstaller.com/compare/worlds-tallest`,
  `daycareindex.com/texas/houston`. The homepage schema already asserts `owns` for each
  of these; the footer links are the crawlable half of that claim.
- **Elsewhere**: GitHub, LinkedIn, X, the TechEarl author page, and the ORCID record,
  each with `rel="me"`. These mirror the `sameAs` array in the Person node, which is what
  consolidates the entity rather than leaving it split across profiles.
- Base row keeps the copyright and the domain.

Removed the one-line origin string ("Ananda College Colombo, Sri Lanka. Charles Sturt
University, Australia. Based in Medford, New Jersey.") that had been added to the footer
earlier in the day. The Sri Lanka and Australia signals stay where they are load-bearing:
one light mention in the homepage `.note` prose, the About page credentials list, and
`alumniOf` with `PostalAddress` (Colombo/LK, AU) in the homepage JSON-LD.

### Work page (earlier in the same pass)

- `.work` switched from a fixed three-column grid to multi-column with
  `break-inside: avoid`, so cards pack to their natural height instead of leaving holes.
  Lead card uses `column-span: all`.
- Every project card now links to a real page on its own site rather than repeating
  `/writing/#topics`. All verified 200. WPPaste in particular now links the core-reference
  pages developers actually search: `init` hook, `get_posts()`, `WP_Query`,
  `register_post_type()`, `add_filter()`, `wp_enqueue_scripts`, `save_post`.

## Not done, recommended next

**The `/about/` cannibalization.** `/` and `/about/` both target `ishan karunaratne`, and
`/about/` is the one losing (6.4, 1 click on 27 impressions). `/` should stay the owner of
the bare-name query. `/about/`'s title is currently "About Ishan Karunaratne, Systems
Architect and CTO", which competes head-on. Retitling it toward its own long-tail, the
career, the credentials, and the "which Ishan Karunaratne is this" question it already
answers, would stop the split. I have not changed it, because it is a live ranking page
and the retitle should be a deliberate decision.

## Resubmit

Not yet submitted. After deploy:

```sh
S=~/.claude/skills/ik-super-seo/scripts
node $S/google-index-submit.mjs --site ishankarunaratne.com https://ishankarunaratne.com/ https://ishankarunaratne.com/work/ https://ishankarunaratne.com/about/ https://ishankarunaratne.com/writing/ https://ishankarunaratne.com/contact/
node $S/indexnow-submit.mjs --site ishankarunaratne.com <same urls>
```

Re-run `gsc-page-queries.mjs --site ishankarunaratne.com /about/ 180` in two to four weeks.
