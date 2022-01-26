var express = require("express");
var router = express.Router();
const HttpHandlers = require("../handlers/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello World ❤");
});

router.get("/api/v1/webhook/", HttpHandlers.webhook);

module.exports = router;
