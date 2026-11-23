# 09. Verification of the Codex review, 22 November 2026

| Codex | Finding | Re-check | Label | Action |
|---|---|---|---|---|
| STALE | "41 recipes" | icecreammakerheaven.com/llms.txt lists 40 recipes; sitemap has 40 recipe URLs plus the /recipes/ index (the 41 came from counting the index) | STALE | 40 on /work/ (body, ItemList), home JSON-LD, llms.txt |
| IMPRECISION | Note "every spec from the maker" | /about/: "Every figure on a machine page comes from the maker's own product page or owner's manual, or from the Amazon listing." | IMPRECISION | Note now "every spec sourced" |
| IMPRECISION | JSON-LD descriptions omit Amazon listings | Same /about/ sentence | IMPRECISION | Home node and ItemList now say "maker's page or manual or the Amazon listing" |
| VERIFIED-CORRECT | 59 machines, 21 brands, 7/36/5/11 | Live home page | VERIFIED-CORRECT | None |
| VERIFIED-CORRECT | Nineteen everywhere, 19 ItemList entries | Local pages | VERIFIED-CORRECT | None |
| NEEDS-MANUAL-CHECK | Every model has its own page; link targets | Sitemap has 59 machine pages (63 under the four sections minus 4 CREAMi guides); all 14 linked URLs return 200 | VERIFIED-CORRECT | None |

Keyword volumes (US, Google Ads, 2026-11-22) are in raw-dfs-volume.json.
