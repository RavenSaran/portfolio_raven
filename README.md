# Raven Kumar — Portfolio

Personal portfolio site for **Raven Kumar A/L Saravanan** — Software Developer Student
at Universiti Sultan Zainal Abidin (UniSZA).

🌐 **Live:** https://ravensaran.github.io/portfolio_raven/

## Features

- **Home / Hero** — typed-roles intro, social links, resume download.
- **About** — profile, education, languages and focus areas.
- **Experience** — internship and academic timeline.
- **Skills** — technology stack grouped by category.
- **Projects** — featured work with live/source links.
- **FYP case study** — BinWatch architecture, role dashboards, end-to-end workflow.
- **Robotics** — MASA 2026 maze-solver demo with animated 3D Mechabot.
- **Blog** — short write-ups (Fresh Flower App, ROBOCON 2025).
- **Contact** — direct email, WhatsApp, LinkedIn, GitHub, Instagram.
- **UX** — fully responsive, dark/light theme toggle, EN/BM language toggle, particle background, reveal-on-scroll animations.

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — design tokens, grid/flex layout, responsive breakpoints
- **JavaScript (vanilla)** — typed roles, theme & language toggles, particles, scroll reveal
- **Font Awesome 6** — iconography
- **Google Fonts** — Space Grotesk + JetBrains Mono
- **Node.js + Express** — optional local dev server
- **GitHub Pages** — deployment

## Featured: Final Year Project

The site includes a dedicated **FYP case-study section** for [BinWatch](https://github.com/RavenSaran/BinWatchApp) — a Flutter + Firebase smart waste-management platform with three role-based portals (Admin, Supervisor, Cleaner), an inline SVG architecture diagram, dashboard mock-ups for each role, and a 6-step end-to-end workflow visualisation.

## Screenshots

> Drop screenshots into `assets/img/` using these filenames and they will render here.

| Section | Preview |
| --- | --- |
| Hero | ![Hero](assets/img/screenshot-hero.png) |
| About | ![About](assets/img/screenshot-about.png) |
| Blog | ![Blog](assets/img/screenshot-blog.png) |

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
