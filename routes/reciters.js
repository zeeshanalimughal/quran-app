var express = require("express");
const RecitersController = require("../controllers/RecitersController");

var router = express.Router();

router.get("/", RecitersController.recitersList);
router.get("/:type", RecitersController.recitersListWithType);
// router.get("/:id", RecitersController.singleSurah);

module.exports = router;