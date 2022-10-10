var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var surahsRouter = require("./surahs");
var recitersRouter = require("./reciters");
var typesRouter = require("./types");
var ayahsRouter = require("./ayahs");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/surahs/", surahsRouter);
app.use("/ayahs/", ayahsRouter);
app.use("/reciters/", recitersRouter);
app.use("/types/", typesRouter);

module.exports = app;