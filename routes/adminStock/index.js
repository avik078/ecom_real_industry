var express = require('express');
var router = express.Router();
var crudStock = require("../../Controller/Admin/crudStock");

///////////////////////////////////////////////// new stock regiter
router.post("/regstock" ,crudStock.regStock)
/////////////////////////////////////////////// change stock  quantity
router.post("/changestock",crudStock.changeStock)
/////////////////////////////////////////////////////

module.exports = router ;