// Simple static server for local preview.
// GitHub Pages serves index.html directly — this file is only for `npm start` / `node server.js`.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
// The new developer portfolio is the home page; the classic one stays at /index.html.
const HOME_PAGE = "index2.html";

// Serve every file in the project root as-is ("/" -> index2.html, img/, PDFs, etc.)
app.use(express.static(__dirname, { extensions: ["html"], index: HOME_PAGE }));

// Fallback: any unknown route returns the portfolio page.
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, HOME_PAGE));
});

app.listen(PORT, () => {
  console.log(`\n  Portfolio running at http://localhost:${PORT}\n`);
});
