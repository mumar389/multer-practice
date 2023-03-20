require('dotenv').config();

const express = require("express");
const port = 6960;
const db = require("./config/db");
const path = require("path");

const app = express();

app.use("/uploads", express.static(__dirname + "/uploads"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));

app.listen(port, function () {
  console.log(`Server is up and running on http://localhost:${port}`);
});
