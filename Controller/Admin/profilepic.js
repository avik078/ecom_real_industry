



const  picUpload = async (req,res) => {
  res.status(200).send({status: true , msg:"This pic upload route !! " ,data:req.file })
}

module.exports = {picUpload}