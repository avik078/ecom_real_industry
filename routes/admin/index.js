var express = require('express');
var router = express.Router();
var admin = require("../../Controller/Auth/admin");
var  middleware_1 = require("../../service/middleware").middleware_1


// router.post("/adminpicregister" ,admin.postAdminPic)
router.use(middleware_1)
router.post("/adminregister" ,admin.postAdmin)
router.post("/adminlogin" ,admin.loginAdmin)
module.exports = router;