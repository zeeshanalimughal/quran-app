var express = require("express");
const TypesController = require("../controllers/TypesController");

var router = express.Router();

router.get("/", TypesController.typesList);

module.exports = router;