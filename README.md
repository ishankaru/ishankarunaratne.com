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

## Featured links on /work/

The Lyrics LK and Chords LK entries carry a "Most searched right now" row between
`<!-- lyrics-featured:start -->` / `end` and `<!-- chords-featured:start -->` / `end` markers.
They are the pages with the most Search Console impressions, linked with the query people
type as the anchor text. Refresh them every month or two:

```bash
# from a project that holds sa-creds/ (lyrics-lk.com or chordslk.com)
node ~/.claude/skills/ik-super-seo/scripts/gsc-top-pages.mjs lyrics-lk.com 90 10
node ~/.claude/skills/ik-super-seo/scripts/gsc-top-pages.mjs chordslk.com 90 6
```

Take the top four or five pages and write them into the sentence between the markers with the
leading query as the link text (artist name in plain text, song plus "lyrics" or "chords" as the
anchor). Update the "as of" date and the song/artist counts (from the site's home page) in the same edit.
