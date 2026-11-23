[ERROR] work/index.html:153; work/index.html:38; index.html:334; llms.txt:65  
Claim: “67 aquarium fish (55 freshwater, 12 saltwater)”  
Problem: The 67 entries include a cherry shrimp and a mystery snail. That makes 65 fish: 53 freshwater and 12 saltwater.  
Correction: Say “67 aquarium animals: 53 freshwater fish, 12 saltwater fish, a cherry shrimp and a mystery snail,” or use “65 fish” where the claim is specifically about fish.  
Source: https://aquariumfishguide.com/fish/cherry-shrimp/ and https://aquariumfishguide.com/fish/mystery-snail/

[VERIFIED-CORRECT] work/index.html:152  
Claim: “four readings update”  
Problem: The site’s source implements stocking by estimated adult body weight, eating or nipping conflicts, a shared temperature range, weight on the stand, and a running cost. Its builder includes the stated tank, stand, fish, sand, rocks, plants and gear controls.  
Correction: None.  
Source: https://aquariumfishguide.com/

[VERIFIED-CORRECT] work/index.html:152  
Claim: “I have kept freshwater fish since I was a kid”  
Problem: The About page’s source explicitly describes keeping freshwater fish from about age seven or eight.  
Correction: None.  
Source: https://aquariumfishguide.com/about/

[VERIFIED-CORRECT] work/index.html:81  
Claim: “Twenty systems, largest first”  
Problem: The local HTML has 20 articles and 20 consecutively numbered ItemList entries; Aquarium Fish Guide is seventh in both. The new `#aquariumfishguide` node has one matching `owns` reference, and `#person` is preserved. No eighteen or nineteen project count remains in the site files. “Largest first” has no stated metric, so position seven cannot be independently ranked.  
Correction: None required for the count or graph.  
Source: https://ishankarunaratne.com/work/

[NEEDS-MANUAL-CHECK] work/index.html:153; llms.txt:65  
Claim: “Every one has its own care page with tank mates, common mistakes and the sources it was checked against”  
Problem: The source checkout contains all 67 profiles and the stated care sections, and defines the linked routes, stands comparison, and substrate pounds and bags. Live page fetches were intermittent, so I could not confirm every deployed link or rendered page directly.  
Correction: Check the linked pages on the live deployment before publishing this copy.  
Source: https://aquariumfishguide.com/sitemap.xml

Count: ERROR 1; STALE 0; IMPRECISION 0; VERIFIED-CORRECT 3; NEEDS-MANUAL-CHECK 1.
