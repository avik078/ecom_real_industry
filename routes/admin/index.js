var express = require('express');
var router = express.Router();
var admin = require("../../Controller/Auth/admin");


router.post("/adminregister" ,admin.postAdmin)
module.exports = router;