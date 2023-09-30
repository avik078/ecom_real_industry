

var express = require('express');
var router = express.Router();
var buy = require("../../Controller/User/buy");

// router.post("/buy",buy.checkOut)
router.post("/finalorder",buy.finalOrder)
module.exports = router;

