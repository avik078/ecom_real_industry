var express = require('express');
var router = express.Router();
var adminPro = require("../../Controller/Admin/product");


router.post("/proregister" ,adminPro.postPro)
router.post("/catregister" ,adminPro.postCat)
router.post("/subcatregister" ,adminPro.postSub)

module.exports = router ;