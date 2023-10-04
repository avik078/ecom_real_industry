var express = require('express');
var router = express.Router();
var adminPro = require("../../Controller/Admin/product");
var  crudPro = require("../../Controller/Admin/crudPro")         // delPro,delCat,delSub


router.post("/proregister" ,adminPro.postPro)
router.post("/catregister" ,adminPro.postCat)
router.post("/subcatregister" ,adminPro.postSub)
////////////////////
router.delete("/delpro",crudPro.delPro)
router.delete("/delcat",crudPro.delCat)
router.delete("/delsub",crudPro.delSub)
///////////////////
router.put("/updatepro",crudPro.putPro)
router.put("/updatecat",crudPro.putCat)
router.put("/updatesub",crudPro.putSub)


module.exports = router ;