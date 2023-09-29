var express = require('express');
var router = express.Router();
var userPro = require("../../Controller/User/product");



router.get("/getall" ,userPro.getAll)
router.post("/getsearch" ,userPro.getSearch)
router.post("/getcatwis" ,userPro.getCategoryWise)  
// router.post("/getsubwis" ,userPro.getSubWise) 

module.exports = router;