# Fahad Jaseem — Portfolio

A single-page portfolio for Fahad Jaseem, DevOps Engineer, built as a plain
HTML/CSS/JS static site — no build step, no dependencies, deploys straight
from the repo root.

Design concept: the site borrows its structure from a CI/CD pipeline — a
terminal-style hero, a pipeline strip used as the section nav, and status
lights/pulses used the same way GitHub Actions or Kubernetes health probes
report status.

## Files

- `index.html` — page structure and content
- `style.css` — design system (colors, type, layout)
- `script.js` — terminal typing effect, scroll progress, active-stage nav, reveal-on-scroll
- `netlify.toml` — zero-config Netlify deploy settings

## Before you deploy

Open `index.html` and update the placeholders in the **Contact** section
(search for `TODO`) with your real email, GitHub, and LinkedIn links.

## Run locally

No build tools needed. Either:

```bash
# open directly
open index.html

# or serve it (recommended, avoids some browser file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Netlify via GitHub

1. Push this folder to a GitHub repo (see commands below).
2. In Netlify: **Add new site → Import an existing project → GitHub**.
3. Pick the `fahad-portfolio` repo.
4. Build settings: leave build command empty, publish directory `.` —
   `netlify.toml` already sets this, so you can also just click deploy.
