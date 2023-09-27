var express = require('express');
var router = express.Router();
var  admin = require("./admin");
var  user = require("./user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*   GET API  page. */ 
router.use("/api",admin)
router.use("/api",user)


module.exports = router;
