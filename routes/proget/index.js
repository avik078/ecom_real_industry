var express = require('express');
var router = express.Router();
var userPro = require("../../Controller/User/product");



router.get("/getall" ,userPro.getAll)
router.get("/getsearch" ,userPro.getSearch)


module.exports = router;