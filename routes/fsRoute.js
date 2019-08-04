var express = require("express");
var router = express.Router();

var fsController = require("../controllers/fsController");

router.route("/getlist/:file_name")
    .get(fsController.readFile)

module.exports = router;    