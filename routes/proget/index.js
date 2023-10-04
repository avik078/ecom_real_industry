var express = require('express');
var router = express.Router();
var userPro = require("../../Controller/User/product");



router.get("/getall" ,userPro.getAll)
router.get("/getsearch/:keyword" ,userPro.getSearch)
router.get("/getcatwis/:catId" ,userPro.getCategoryWise)  
router.get("/getsubwis/:subId" ,userPro.getSubWise) 

module.exports = router;