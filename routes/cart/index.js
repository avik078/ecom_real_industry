var express = require('express');
var router = express.Router();
var userCart = require("../../Controller/User/cart");


router.get("/getcart" ,userCart.getCart)
router.post("/addcart" ,userCart.addToCart)
// router.post("/getsearch" ,userPro.getSearch)
// router.post("/getcatwis" ,userPro.getCategoryWise)  
// router.post("/getsubwis" ,userPro.getSubWise) 

module.exports = router;