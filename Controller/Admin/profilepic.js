
const multer = require('multer');

///////////////////////////////////////////////////////////////////
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: '../../uploads', 
      filename: (req, file, cb) => {
        const fileName = req.header.filename
        console.log(file)
          cb(null, file.fileName + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
//////////////////////////////////////////////////////////////////
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

const  picUpload = async (req,res) => {

    imageUpload(req)
    res.status(200).send({data:"This pic upload route !"})
}

module.exports = {picUpload}


