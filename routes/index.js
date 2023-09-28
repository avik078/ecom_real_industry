var express = require('express');
var router = express.Router();
// /\/\/\/\/\/\
var  admin = require("./admin");
var  user = require("./user");  
var  proregister = require("./proregister");
var  proget = require("./proget");
// /\/\/\/\/\/\/
var  middleware_1 = require("../service/middleware").middleware_1
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*   GET API  page. */ 
router.use("/api",admin)
router.use("/api",user)
router.use(middleware_1) /////////token verify for further query ADMIN
router.use("/api",proregister)
router.use("/api",proget)

module.exports = router;
