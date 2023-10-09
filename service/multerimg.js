const multer = require('multer');
const path = require('path') ;

///////////////////////////////////////////we run  multer as a middle ware here 

/////////////////////////////////////////////////////////////////// storage
const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: './uploads',  // automatically starts from root path , does not support relative path
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' +   Date.now() // .fieldname === key name postman , .originalname === uploaded file name 
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

module.exports =  {imageUpload,}