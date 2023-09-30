
var express = require('express');
var router = express.Router();
var proPic = require("../../Controller/Admin/profilepic");


router.post("/picadm" ,proPic.picUpload)

module.exports = router;

