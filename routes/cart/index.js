var express = require('express');
var router = express.Router();
var userCart = require("../../Controller/User/cart");


router.get("/getcart" ,userCart.getCart)
router.post("/addcart" ,userCart.addToCart)
router.post("/incqty" ,userCart.inQty)
router.delete("/delcart" ,userCart.delfromCart)

module.exports = router;