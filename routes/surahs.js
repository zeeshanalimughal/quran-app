var express = require("express");
const SurahsController = require("../controllers/SurahsController");

var router = express.Router();

router.get("/", SurahsController.surahList);
// router.get("/:id", SurahsController.singleSurah);

module.exports = router;