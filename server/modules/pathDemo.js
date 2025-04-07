// pathDemo.js
const path = require("path");

// Chemin construit dynamiquement
const filePath = path.join(__dirname, 'demo', 'file.txt');

// Exemple d'utilisation du module path
const demo = {
  basename: path.basename(filePath),
  dirname: path.dirname(filePath),
  extname: path.extname(filePath),
  joinExample: path.join("demo", "docs", "file.md"),
  resolveExample: path.resolve("demo", "file.md"),
};

module.exports = demo;