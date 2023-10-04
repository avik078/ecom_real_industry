var express = require('express');
var router = express.Router();
// /\/\/\/\/\/\
var  admin = require("./admin");
var  user = require("./user");  
var  proregister = require("./proregister");
var  proget = require("./proget");
var  cart = require("./cart");
var  adminpic = require("./adminpic");
var  userpic = require("./userpic");
var  buy  =  require("./buy");
var  wish  =  require("./wish");
// /\/\/\/\/\/\/\/\/\/\/\/\/\/
var  middleware_1 = require("../service/middleware").middleware_1

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*   GET API  page. */ 
router.use("/api",admin)
router.use("/api",user)
router.use(middleware_1) /////////token verify for further query ADMIN amd USER
router.use("/api",adminpic)
router.use("/api",userpic)
router.use("/api",proregister)
router.use("/api",proget)
router.use("/api",cart)
router.use("/api",buy)
router.use("/api",wish)

module.exports = router;
