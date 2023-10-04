


const  picUpload = async (req,res) => {
    res.status(200).send({status: true , msg:"User pic uploaded successfully !! " ,data:req.file })
  }
    
module.exports = {picUpload}