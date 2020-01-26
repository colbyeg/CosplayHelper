const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const router = require("./routes");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname + "/../cosclient/build")));

app.use("/", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../cosclient/build/index.html"));
});

module.exports = app;
