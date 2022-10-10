var express = require("express");
const AyahsController = require("../controllers/AyahsController");

var router = express.Router();

router.get("/:surahNumber/:ayahNumber", AyahsController.ayahSingleWithSurah);
// router.get("/:id", SurahsController.singleSurah);

module.exports = router;