# Hoda Anvari-Kazemabad — Portfolio

Personal portfolio website (English / German), plain HTML + CSS + JavaScript. No build step.

## Structure

```
index.html            page skeleton (rarely needs editing)
css/style.css         design — colours are at the top (:root)
js/content.js         ALL texts, EN + DE  ← edit this to change content
js/main.js            renders the page from content.js
assets/hoda.jpg       profile photo
assets/CV_...pdf      downloadable CV
```

## Edit locally

Open `index.html` directly in the browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Add a project

In `js/content.js`, copy one block inside `projects.items` (in **both** `en` and `de`) and change it:

```js
{ name: "SoulReach", tag: "Web",
  url: "https://soulreach.app",
  role: "Founder & developer",
  text: "Short description…",
  tech: ["React", "Netlify"] },
```

## Publish

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages updates automatically within ~1 minute.
