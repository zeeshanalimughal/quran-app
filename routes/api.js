var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var surahsRouter = require("./surahs");
var recitersRouter = require("./reciters");
var typesRouter = require("./types");
var ayahsRouter = require("./ayahs");
var audiosRouter = require("./audios");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/surahs/", surahsRouter);
app.use("/ayahs/", ayahsRouter);
app.use("/reciters/", recitersRouter);
app.use("/types/", typesRouter);
app.use("/audio/", audiosRouter);

module.exports = app;