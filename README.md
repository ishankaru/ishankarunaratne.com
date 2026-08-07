# ishankarunaratne.com

Personal site of Ishan Karunaratne. One static page, no build step, no dependencies.

Hosted on GitHub Pages from the `main` branch, served at the apex domain via `CNAME`.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole page: markup, inlined CSS and font faces, and the JSON-LD in `<head>`. |
| `assets/fonts/` | Schibsted Grotesk, self-hosted, one variable woff2. |
| `llms.txt` | Identity and disambiguation for AI crawlers. |
| `robots.txt` | Allows the AI crawlers explicitly. |
| `sitemap.xml` | Single URL. |
| `CNAME` | Apex domain for GitHub Pages. |

## Local preview

```bash
python3 -m http.server 4173
# http://localhost:4173
```
