# Step 2, FRAME (FLOW: Find and Leverage), 21 November 2026

Built on `01-data.md`. FLOW stages used: **Find** (what the evidence says, intent map, gaps)
and **Leverage** (off-site authority I already own). Optimize and Win come later in the
pipeline.

## Find: what evidence exists

| Evidence | Strength | What it proves |
|---|---|---|
| GSC: name query, pos 1.2 US, 41.9% CTR on `/` | medium, likely personalised | the page is indexed and Google associates it with the name for searchers near me |
| DataForSEO live US SERP: site absent from top 10 | strong (non-personalised) | a cold US searcher does not find the site; profile pages from social networks and rehab.com win |
| GSC trend 208 to 10 impressions/month | strong | name demand is close to zero once launch-month self-checks drop out |
| Name volume "not reported" | strong | under 10 searches/month in the US; this is a reputation asset, not a traffic asset |
| Bing: 13 impressions total, inner pages at 16 to 24 for the name | weak (few rows) | Bing has not settled on `/` as the entity page |
| 5/5 URLs now indexed in Google | strong | indexing is solved; `/writing/` and `/contact/` were the old gap |
| jwaedge 32 impr on `/work/` | strong | `/work/` outranks a brand-new property for its own name; signal for jwaedge.com, not for this site |

What does **not** exist: any first-party data for role terms (fractional CTO, architecture
review, technical due diligence). The site has never had a single impression for them.

## Find: realistic scope

**In scope (winnable):**
1. **Owning the name SERP**: "ishan karunaratne", plus "ishan karunaratne cto", "... techearl",
   "... dns checker", "... army". Volume is tiny, but this is the query a prospective client,
   recruiter or partner types after a referral, and today a cold searcher lands on the
   Companies House record and other people's social accounts first.
2. **Disambiguation**: at least five other Karunaratnes occupy the page. The site must make
   it unambiguous which one it describes, for Google, Bing and the AI Overview.
3. **"Who built / owns X" queries** for my properties (DNS Checker 33,100 US searches for
   "dns checker" sits on dnschkr.com, not here, but "who owns DNS Checker" style questions and
   AI answers about the owner are winnable from `/work/` and `/about/`).
4. **AI answers about me** (AI Overview is on the name SERP; ChatGPT, Perplexity, Copilot): the
   entity graph and llms.txt are the lever, and they are already better than average.

**Out of scope (say no plainly):**
- "fractional cto" (1,600/mo, CPC $25) and "fractional cto services" (320): the SERP for these
  is agencies, marketplaces and listicles. A one-person profile site with no backlink profile
  will not rank, and should not try with a services page bolted onto a personal site.
- "systems architect" (3,600) and "network architect" (2,400): job-definition and careers
  queries. Wrong intent entirely.
- "technical due diligence" (140) and "software architecture review" (20): small, commercial,
  dominated by firms. Possible only via a TechEarl article, not via this site.
- "techearl" and "dnschkr" brand queries belong to those domains. `/writing/` should not try
  to compete with techearl.com for "techearl".

Role terms belong on the site as **descriptive copy that converts referral visitors** (already
present on `/`, `/contact/`), not as ranking targets.

## Leverage: strengths to build on

1. **rehab.com/expert/ishan-karunaratne ranks #5 for my name on a non-personalised US SERP.**
   It is the strongest page about me that Google trusts. It is not in the home page's
   `sameAs`, and it did not show a link back to ishankarunaratne.com when fetched. Linking it
   both ways (sameAs from my Person node, and a profile link from the rehab.com bio) is the
   cheapest authority transfer available.
2. **My own LinkedIn (`/in/ishankarunaratne/`) is not on page one** while other people's
   LinkedIn pages are. It is in `sameAs` already; the LinkedIn profile itself needs the
   website field pointing at ishankarunaratne.com and the same headline wording, so the two
   reinforce each other.
3. **Owned properties with real authority**: techearl.com (700+ articles), dnschkr.com, and
   sixteen other sites. The canonical Person `@id` (`ishankarunaratne.com/#person`) is
   already the shared entity across techearl and dnschkr. Every author box and footer on
   those sites linking to `/` (or `/about/`) with the name as anchor is the main link-equity
   source a personal site can have. Several newer properties (Kendraya, ChalkStash,
   babycarseat, insidedns, jwaedge) still do not reciprocate; that is a known open item.
4. **Indexing is fixed** (5/5), so content changes will be seen.
5. **A rich ProfilePage + Person graph** with credentials, ORCID, GitHub, and 7 WebApplication
   nodes already exists on `/`. The structure is a strength; the issue is off-site
   corroboration, not markup volume.
6. **Bing**: the site is verified there and IndexNow works; for a name query Bing leans on
   social profiles and LinkedIn even more than Google, so the LinkedIn fix above matters
   doubly.

## Gaps the later steps should pick up

- `/` and `/about/` are both `ProfilePage` about the same person (see `03-sxo.md`).
- No disambiguation sentence telling engines this is not the Sri Lankan developer
  (@ishansasika) or the UK company officer.
- rehab.com expert page missing from `sameAs`; Threads and X are present but Instagram,
  Companies House etc. belong to other people and must never be added.
- `/work/` collects impressions for "jwaedge" that jwaedge.com should earn: fix on jwaedge.com
  (verify in Bing, title and H1 carry "JWA Edge"), not here.
- Measurement: GSC name position is personalised. Use a monthly DataForSEO SERP pull
  ($0.002) for the name as the honest rank tracker.
