var express = require('express');
var router = express.Router();
var  admin = require("./admin");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*   GET API  page. */ 
router.use("/api",admin)


module.exports = router;
