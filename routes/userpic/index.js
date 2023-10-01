

var express = require('express');
var router = express.Router();
var proPic = require("../../Controller/User/profilepic");
const multerimg =  require ('../../service/multerimg').imageUpload

///////////////////////////////////////////////////////////////////
function routeCheck (req,res,next) {
    console.log("multer route is hit for user pic")
    next()
}

router.post("/picusr" ,routeCheck, multerimg.array('image', 4) , proPic.picUpload , (error, req, res, next) => {   
  // 4  image at once or imageUpload.single('image') for only one
    res.status(400).send({ error: error.message })
})


module.exports = router;

