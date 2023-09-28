var express = require('express');
var router = express.Router();
var user = require("../../Controller/Auth/user");



router.post("/userregister" ,user.postUser)
router.post("/userlogin" ,user.loginUser)
router.post("/tokenlogin",user.tokenLogin)

module.exports = router;