// Simple static server for local preview.
// GitHub Pages serves index.html directly — this file is only for `npm start` / `node server.js`.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve every file in the project root as-is (index.html, img/, PDFs, etc.)
app.use(express.static(__dirname, { extensions: ["html"] }));

// Fallback: any unknown route returns the portfolio page.
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n  Portfolio running at http://localhost:${PORT}\n`);
});
