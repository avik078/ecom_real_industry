var express = require('express');
var router = express.Router();
var admin = require("../../Controller/Auth/admin");
var  middleware_1 = require("../../service/middleware").middleware_1



router.use(middleware_1)
router.post("/userregister" ,admin.postAdmin)
router.post("/userlogin" ,admin.loginAdmin)
module.exports = router;