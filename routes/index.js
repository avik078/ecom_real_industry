var express = require('express');
var router = express.Router();
var  admin = require("./admin");
var  user = require("./user");
var  proregister = require("./proregister");
var  middleware_2 = require("../service/middleware").middleware_2
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*   GET API  page. */ 
router.use("/api",admin)
router.use("/api",user)
router.use(middleware_2) /////////token verify for further query
router.use("/api",proregister)

module.exports = router;
