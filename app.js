const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const xss = require("xss"); // ← Sanear entradas

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE comentarios (id INTEGER PRIMARY KEY, autor TEXT, contenido TEXT)");
});

app.get("/", (req, res) => {
  db.all("SELECT * FROM comentarios", (err, rows) => {
    res.render("index", { comentarios: rows });
  });
});

app.post("/nuevo", (req, res) => {
  const autor = xss(req.body.autor);         // ← Sanitización
  const contenido = xss(req.body.contenido); // ← Sanitización

  db.run("INSERT INTO comentarios (autor, contenido) VALUES (?, ?)", [autor, contenido], () => {
    res.redirect("/");
  });
});

app.get("/buscar", (req, res) => {
  const autor = xss(req.query.autor || ""); // ← Sanitización
  db.all("SELECT * FROM comentarios WHERE autor LIKE ?", [`%${autor}%`], (err, rows) => {
    res.render("busqueda", { resultados: rows, autor });
  });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
