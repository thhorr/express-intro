const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

const user = JSON.parse(fs.readFileSync("users.json"));
app.get("/users", (req, res) => {
  res.json({ status: "success", data: user });
});

const port = 3000;
app.listen(port, () => {
  console.log("App Running");
});
