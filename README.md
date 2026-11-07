# Hoda Anvari-Kazemabad — Personal website

Personal website (English / German) — plain HTML, CSS and JavaScript, no build step.
Live: https://hkazemabad.github.io

## Structure

```
index.html            page skeleton, SEO meta tags, structured data
css/style.css         design — colours and fonts are at the top (:root)
js/content.js         ALL texts in English (en) and German (de)  ← edit this
js/main.js            renders the page from content.js, language switch, menu
assets/hoda.jpg       profile photo
assets/CV_…_EN.pdf    CV linked from the English page
assets/CV_…_DE.pdf    CV linked from the German page
404.html              "page not found"
robots.txt, sitemap.xml
```

## Languages

- Every text exists twice in `js/content.js`: once under `en`, once under `de`. Keep both in sync.
- The language can be set in the URL: `?lang=en` or `?lang=de` (useful for links on LinkedIn).

## Edit and test locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Add a project

In `js/content.js`, copy one block inside `projects.items` (in both `en` and `de`) and adapt it:

```js
{ name: "Project name", tag: "Category", period: "2026",
  org: "Where · team or personal project",
  overview: "One sentence: what it is.",
  points: ["What I did", "What I did", "What I did"],
  note: "",
  tech: ["Tech", "Tech"],
  links: [{ label: "GitHub", url: "https://github.com/…" }] },
```

## Publish

```bash
git add .
git commit -m "Describe the change"
git push
```

GitHub Pages updates within about a minute.
