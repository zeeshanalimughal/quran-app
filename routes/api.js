var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var surahsRouter = require("./surahs");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/surahs/", surahsRouter);

module.exports = app;