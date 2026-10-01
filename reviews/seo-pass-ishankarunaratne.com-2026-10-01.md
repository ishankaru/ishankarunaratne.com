# Work page pass, 1 October 2026: adding Kendraya

I added Kendraya (kendraya.com) to /work/ as the sixteenth system, third in the list, with
keyword anchors chosen from search volume. Kendraya has no Search Console data yet (it is
behind a preview login and noindex), so the anchors come from DataForSEO US volumes pulled
today and from `kendraya.com/kw/`, not from queries the site already earns.

## Anchors and why

| Anchor text | Target | US monthly volume | Source |
|---|---|---|---|
| free birth chart calculator | `/` | 33,100 ("birth chart calculator" 165,000) | kw files, DataForSEO |
| Vedic astrology chart | `/` | 33,100 | DataForSEO |
| daily horoscope | `/horoscope` | 246,000 | DataForSEO |
| Leo horoscope today | `/horoscope/leo` | 90,500 | kw-horescope.csv |
| Libra horoscope today | `/horoscope/libra` | 90,500 | kw-horescope.csv |
| is Mercury in retrograde | `/retrograde` | 90,500 | DataForSEO |
| Mercury retrograde 2026 dates | `/retrograde#mercury` | 165,000 ("mercury retrograde 2026") | DataForSEO |
| zodiac signs dates | `/zodiac-sign-dates` | 246,000 | both |
| baby name finder | `/baby-name-finder` | not reported | see below |

Each anchor matches the target page's own title or H1 phrasing, so the link text and the
page agree on the intent. One page per intent: both Mercury anchors go to the single
retrograde page.

Google Ads withholds volume for almost every baby-name phrase (DataForSEO returned a figure
only for "baby boy names", 110,000, KD 8), so "baby name finder" is the page's own title
phrase, not a measured choice.

## Changes

- `work/index.html`: new Kendraya article after TechEarl, ItemList entry at position 3
  (16 items), "Fifteen" to "Sixteen" in the description, meta rail, closer and footer,
  `dateModified` and the visible date to 2026-10-01.
- `assets/kendraya.webp`: 1200x750 home page screenshot.
- Footer count on `/`, `/about/`, `/writing/`, `/contact/`, `404.html`; `llms.txt` entry and
  count; `sitemap.xml` lastmod for /work/.

## Open before this is worth publishing

- kendraya.com returns 401 without the preview login and every page is `noindex, nofollow`.
  The links pass nothing until the login is removed and `SITE_LAUNCHED=true` is deployed.
- `/baby-name-finder` is 404 on the deployed revision (a539081). It exists only in the local
  working tree. Deploy it before launch or the link points at a missing page.
- Kendraya does not yet link back to ishankarunaratne.com/#person, so the ownership claim
  is one-sided.

Resubmission: none yet. Not committed or pushed.
