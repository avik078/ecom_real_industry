var express = require('express');
var router = express.Router();
var  wishlist = require("../../Controller/User/wishlist");

router.post("/addwish" ,wishlist.addwish)

module.exports = router ;