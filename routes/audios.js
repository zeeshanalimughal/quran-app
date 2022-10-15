var express = require("express");
const AudiosController = require("../controllers/AudiosController.js");

var router = express.Router();

router.get("/:reciter", AudiosController.getAudiosByReciters);
// router.get("/:id", SurahsController.singleSurah);

module.exports = router;