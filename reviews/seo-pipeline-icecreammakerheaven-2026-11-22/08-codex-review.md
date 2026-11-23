[STALE] work/index.html, index.html, llms.txt  
Claim: "41 recipes"  
Problem: The live site’s `llms.txt` lists 40 recipes. The recipe data used by the site also contains 40. The new work entry, ItemList description, home JSON-LD, and personal-site `llms.txt` repeat 41.  
Correction: Change these references to 40, unless a 41st recipe is published.  
Source: [Ice Cream Maker Heaven llms.txt](https://icecreammakerheaven.com/llms.txt)

[IMPRECISION] work/index.html  
Claim: "every spec from the maker"  
Problem: The entry itself allows Amazon listings as a source, and the project’s About page says the same.  
Correction: Say “specs sourced from maker pages, manuals, or Amazon listings.”  
Source: [Ice Cream Maker Heaven About](https://icecreammakerheaven.com/about/)

[IMPRECISION] index.html  
Claim: "with specs from each maker's page or manual"  
Problem: The home JSON-LD description omits Amazon listings, which the site explicitly uses. The ItemList’s “specs from each maker” has the same issue.  
Correction: Include Amazon listings in both descriptions.  
Source: [Ice Cream Maker Heaven About](https://icecreammakerheaven.com/about/)

[VERIFIED-CORRECT] work/index.html  
Claim: "59 machines from 21 brands"  
Problem: None found. The machine data has 59 entries and 21 brands; its four groups contain 7, 36, 5, and 11 machines, totaling 59.  
Correction: None.  
Source: [Ice Cream Maker Heaven](https://icecreammakerheaven.com/)

[VERIFIED-CORRECT] work/index.html  
Claim: "Nineteen systems, largest first"  
Problem: None found in the local page structure. There are 19 visible articles and 19 ItemList entries numbered 1–19. Position 6 is reasonable in the existing broad ordering. No “eighteen” remains in the scoped pages.  
Correction: None.  
Source: [Work page](https://ishankarunaratne.com/work/)

[NEEDS-MANUAL-CHECK] work/index.html  
Claim: "Every model has its own page"  
Problem: The linked routes match the site’s source routing, but intermittent DNS failures prevented a reliable live response check for every individual link target.  
Correction: Check the linked URLs against the published sitemap and open each target before release.  
Source: [Ice Cream Maker Heaven sitemap](https://icecreammakerheaven.com/sitemap.xml)

Counts: ERROR 0 · STALE 1 · IMPRECISION 2 · VERIFIED-CORRECT 2 · NEEDS-MANUAL-CHECK 1.
