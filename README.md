# Raven Kumar — Portfolio

Personal portfolio site for **Raven Kumar A/L Saravanan** — Software Developer Student
at Universiti Sultan Zainal Abidin (UniSZA).

🌐 **Live:** https://ravensaran.github.io/portfolio_raven/

## Featured: Final Year Project

The site includes a dedicated **FYP case-study section** for [BinWatch](https://github.com/RavenSaran/BinWatchApp) — a Flutter + Firebase smart waste-management platform with three role-based portals (Admin, Supervisor, Cleaner), an inline SVG architecture diagram, dashboard mock-ups for each role, and a 6-step end-to-end workflow visualisation.

## Stack

Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies
to render the page. Hosted on GitHub Pages with an optional Node.js dev server.

## Project structure

```
portfolio_raven/
├── index.html              # Page markup
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles (design tokens + components)
│   ├── js/
│   │   └── main.js         # Typed roles, nav, reveal-on-scroll, particles
│   ├── img/
│   │   └── profile.jpg     # Profile photo
│   └── docs/
│       ├── RAVEN KUMAR CV.pdf
│       └── Raven's Resume.pdf
├── server.js               # Optional Express dev server
├── package.json
└── README.md
```

## Local preview

### Option 1 — Node.js (recommended)

```bash
npm install
npm start
```

Then visit http://localhost:3000.

### Option 2 — Just open the file

Double-click `index.html` to open it directly in your browser.

## Deployment

GitHub Pages serves `index.html` and the `assets/` folder directly from the `main`
branch. After committing changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The site rebuilds automatically within ~1 minute.

## Contact

- Email: ravenkumarsaravanan@gmail.com
- WhatsApp: +60 19-278 1739
- LinkedIn: https://linkedin.com/in/raven-kumar-saravanan
- GitHub: https://github.com/RavenSaran
