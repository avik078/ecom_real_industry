



const  picUpload = async (req,res) => {
  res.status(200).send({status: true , msg:"Aadmin pic uploaded successfully  !! " ,data:req.file })
}

module.exports = {picUpload}