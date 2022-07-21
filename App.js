const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let booksAdded = [
  "Instant Millionaire",
  "Rich Dad Poor Dad",
  "Richest man in Babylon",
];
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    month: "numeric",
    year: "numeric",
  };
  let currentdate = today.toLocaleDateString("en-US", options);

  res.render("Book", { date: currentdate, newItem: booksAdded });
});

app.post("/", (req, res) => {
  let booksnotes = req.body.books;
  booksAdded.push(booksnotes);

  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Server is up and running");
});
