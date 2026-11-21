# 05d Schema: ishankarunaratne.com (2026-11-21)

Method: `seo-schema` skill. Every `<script type="application/ld+json">` block on the five pages and
404 was extracted from the live HTML (identical to the local files) and parsed with Python `json`;
nodes, `@id` references and values were then checked against the visible body text of each page
and against the live sameAs targets. No Microdata or RDFa anywhere. No FAQPage, HowTo or other
deprecated types (project rule respected).

## Inventory

| Page | Line | Block | Status |
|---|---|---|---|
| `/` | `index.html:26-577` | `@graph`: Person `#person`, ProfilePage `#profilepage`, WebSite `#website`, 18 owned properties (`Blog` TechEarl, 8 `WebApplication`, 9 `WebSite`) | Parses. Valid. Issues M-1, M-2, L-1 |
| `/about/` | `about/index.html:26-29` | BreadcrumbList (Home, About) | Valid |
| `/about/` | `about/index.html:31-38` | ProfilePage `/about/`, `mainEntity: {"@id": "#person"}` | **Not valid for Google** (H-1) |
| `/work/` | `work/index.html:26-29` | BreadcrumbList (Home, Work) | Valid |
| `/work/` | `work/index.html:31-38` | CollectionPage + ItemList (18 items) | Valid; matches the 18 visible entries in order. InsideDNS item points at a dead host (see 05a H-1) |
| `/writing/` | `writing/index.html:26-29` | BreadcrumbList (Home, Writing) | Valid |
| `/writing/` | `writing/index.html:31-39` | CollectionPage + ItemList (12 topic hubs) | Valid; matches the 12 visible topic links. "700+" claim (M-3) |
| `/contact/` | `contact/index.html:26-29` | BreadcrumbList (Home, Contact) | Valid |
| `/contact/` | `contact/index.html:31-35` | WebPage | Valid; L-2 |
| `404.html` | none | none | Correct (noindex page) |

All blocks carry `@context: https://schema.org`; all URLs are absolute; dates are ISO 8601. Every
`@id` on the site uses the `https://ishankarunaratne.com/#...` or page-URL form, and every
cross-page reference (`#person`, `#website`) points at a node defined on `/`. The canonical
`#person` @id is consistent across all pages and is referenced by techearl.com and
dnschkr.com (`/blog/author/ishan-karunaratne` carries `ishankarunaratne.com/#person`).

## Critical

None.

## High

### H-1. The /about/ ProfilePage has no resolvable Person, so it fails Google's ProfilePage requirements
- **Page:** `/about/`
- **Where:** `about/index.html:31-38`
- **Evidence:** the block is
  `"@type":"ProfilePage", ..., "mainEntity":{"@id":"https://ishankarunaratne.com/#person"}`
  and nothing else on the page defines that node. Google evaluates structured data per page and
  does not fetch other URLs to resolve an `@id`, so the Rich Results Test sees a ProfilePage whose
  `mainEntity` has no `@type` and no `name`. Google's ProfilePage documentation lists `mainEntity`
  (a Person or Organization) as required and `mainEntity.name` as required. This is the page that
  visibly carries the career, credentials, ORCID and the disambiguation text, i.e. the best
  candidate for the profile signal, and it is the one whose markup does not validate.
- **Fix (keeps the @id unchanged):** declare the Person inline on `/about/` with the same @id, so the
  two copies merge into one entity:
  ```json
  "mainEntity": {
    "@type": "Person",
    "@id": "https://ishankarunaratne.com/#person",
    "name": "Ishan Karunaratne",
    "url": "https://ishankarunaratne.com/",
    "image": "https://ishankarunaratne.com/assets/ishan-karunaratne.webp",
    "jobTitle": "Systems and Network Architect, Chief Technology Officer",
    "identifier": {"@type": "PropertyValue", "propertyID": "ORCID", "value": "0009-0002-3088-0769", "url": "https://orcid.org/0009-0002-3088-0769"},
    "sameAs": ["https://www.linkedin.com/in/ishankarunaratne/", "https://github.com/ishankaru", "https://x.com/ishankaru", "https://orcid.org/0009-0002-3088-0769", "https://techearl.com/author"]
  }
  ```
  Optionally also move `hasCredential` here (see M-2). Validate with the Rich Results Test after.

## Medium

### M-1. `sameAs` on the Person includes the TechEarl brand's Facebook page
- **Page:** `/`
- **Where:** `index.html` Person `sameAs` (inside the block at `index.html:26`), value
  `https://www.facebook.com/thetechearl`
- **Evidence:** `sameAs` asserts the URL identifies *the same entity*. `facebook.com/thetechearl` is
  the TechEarl publication's page: techearl.com lists it in its Organization `sameAs` too
  (`techearl2025/lib/schema.ts:66`, alongside `youtube.com/@techearl`). One URL claimed as both the
  Person and the Organization merges the two entities in a knowledge-graph reconciler, the opposite
  of what the disambiguation work is for. It is also not linked anywhere in the visible page body
  (nor are `threads.com/@ishan.karunaratne` and `dnschkr.com/blog/author/...`, which are fine as
  sameAs targets since they are profiles of the person).
- **Fix:** remove `facebook.com/thetechearl` from the Person `sameAs` (keep it on the TechEarl
  `Blog` node at `#techearl` and on techearl.com's Organization). If there is a personal Facebook
  profile, use that instead. Apply the same change on techearl.com's Person (`lib/schema.ts:42`)
  and dnschkr's author Person so the three sites stay in agreement.

### M-2. Homepage Person carries credentials that only appear on /about/
- **Page:** `/`
- **Where:** `index.html` Person `hasCredential` (8 items) and `homeLocation.addressLocality`
- **Evidence:** of the eight credentials, the homepage body shows only the Charles Sturt degree and the
  Lotus certification; CompTIA A+/Network+/Security+ (2009), CIW Professional (2006), Cisco CCNA
  coursework (2005) and the 1999 diploma are visible only on `/about/`. "Medford" is likewise
  only on `/about/` (home says New Jersey). Google's guidelines expect markup to describe content
  on the page it is on. Low risk of a manual action for Person markup, but it is the kind of
  mismatch a quality reviewer reads as padding.
- **Fix:** keep the lean identity on `/` (name, image, jobTitle, worksFor, alumniOf, identifier,
  sameAs, owns) and move `hasCredential` and the full `homeLocation` into the `/about/` Person from
  H-1, where every value is visible. Same @id, so the entity still merges.

### M-3. "More than 700 articles" is no longer true
- **Page:** `/writing/` (also `/work/`, `/about/`, `llms.txt`)
- **Where:** `writing/index.html:33` (CollectionPage `description`), and the same claim in visible
  text at `writing/index.html:7`, `:15`, `:69`, `:73`, `:81`, `work/index.html:102`,
  `about/index.html:224`, `llms.txt:59`
- **Evidence:** techearl.com's live sitemap lists 647 article URLs (priority 0.8), matching 647
  `status: published` MDX files in the techearl repo, after the consolidation and humor-URL
  retirement commits.
- **Fix:** change to "more than 600" / "600+" (or "about 650") everywhere at once, in the schema
  description and the visible copy together.

## Low

1. **Homepage ProfilePage lacks dates.** `#profilepage` in `index.html:26` has no
   `dateCreated`/`dateModified`, which Google lists as recommended for ProfilePage. Add
   `"dateModified": "2026-11-19"` (and `dateCreated` = first publish) so the profile shows freshness.
2. **Contact page uses generic `WebPage`.** `contact/index.html:32`: `ContactPage` is the precise
   type and the name `"Contact"` differs from the visible H1 "Get in touch". Change to
   `"@type":"ContactPage"` and `"name":"Contact Ishan Karunaratne"` (the title). No rich result
   depends on it; it is a clarity fix.
3. **`knowsAbout` lists topics never shown on `/`.** BGP, Kubernetes, Terraform, DNSSEC, Redis,
   Elasticsearch appear in the homepage Person but not in the homepage body (they appear on
   `/work/` and `/writing/`). Acceptable for `knowsAbout`; trim anything that is not backed by an
   article or a system on the site.
4. **What's Taller count is stale in the schema.** The `#whatstaller` WebApplication `description`
   at `index.html:373` says "293 real and fictional subjects"; the visible `/work/` note
   (`work/index.html:159`) and whatstaller.com itself ("550 objects total") say 550. Change 293 to
   550 (same fix in `llms.txt:63`, see 05e).

## Healthy (checked, no action)

- **Parsing:** all 9 blocks parse; no missing `@context`/`@type`; no relative URLs; no placeholder text.
- **@id graph:** one Person `#person` (unchanged, as required), one WebSite `#website`, one
  ProfilePage `#profilepage` on `/`; 18 property nodes each with a stable `#slug` @id, each
  referenced from `Person.owns` and each pointing `creator`/`publisher` back at `#person`.
  Subpages reference `#website`/`#person` instead of re-minting entities.
- **ProfilePage on `/`** is valid: `mainEntity` resolves to the full Person in the same graph.
- **BreadcrumbList** on all four subpages: two levels, absolute `item` URLs, names match the
  visible breadcrumb trail.
- **ItemLists** on `/work/` (18) and `/writing/` (12) match the visible lists one for one, in order,
  with the same names and URLs.
- **Person identity data** visible on the page: name, job title, Rehab Media Group, ORCID
  (linked), Operation Iraqi Freedom, Charles Sturt, Ananda College, GitHub, LinkedIn, X are all in
  the homepage body; the disambiguation names (Moresand, Sinhalite) are visible on `/about/`.
- **All 8 sameAs URLs return 200** (checked 2026-11-21).
- **No deprecated or rich-result-dead types:** no FAQPage, HowTo, SpecialAnnouncement, ClaimReview.
  The `/about/` FAQ is plain HTML, as the project rule requires.
- **WebApplication `offers`** (`price: 0`) on the free tools is accurate and harmless.

## Severity counts

Critical 0, High 1, Medium 3, Low 4.
