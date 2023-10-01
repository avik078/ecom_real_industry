
var express = require('express');
var router = express.Router();
var proPic = require("../../Controller/Admin/profilepic");
const multer = require('multer');
const path = require('path') ;
///////////////////////////////////////////we run  multer as a middle ware here 

/////////////////////////////////////////////////////////////////// storage
const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: './uploads/adminpics',  // automatically starts from root path , does not support relative path
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() // .fieldname === key name postman , .originalname === uploaded file name 
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});
////////////////////////////////////////////////////////////////// upload
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 10000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
///////////////////////////////////////////////////////////////////
function routeCheck (req,res,next) {
    console.log("multer route is hit")
    next()
}

router.post("/picadm" ,routeCheck, imageUpload.array('image', 4) , proPic.picUpload , (error, req, res, next) => {   // 4  image atonce or imageUpload.single('image') for only one
    res.status(400).send({ error: error.message })
})


module.exports = router;

