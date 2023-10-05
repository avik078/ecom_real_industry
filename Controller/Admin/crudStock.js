
const mongoose = require("mongoose")
const Stock = require("../../Model/stock");

///////////////////////////////////////////////////////////Post stock with color, product id
const regStock = async (req,res) => {
    // console.log("This is  stock register cart")
    await Stock.create(req.body).then(data => {
        res.status(200).json({status:true,msg:"stock registered successfully" , data : data})   
    }).catch(error => {
       res.status(400).json({status:false , msg:"could not registed stock !! please try again" , data:error})
    })
}
///////////////////////////////////////////////////////change stock  
const changeStock = async (req,res) => {
    console.log("This is stock update path")
 
    if (req.body.stock >=0 ) {
        await Stock.updateOne({proId:  new mongoose.Types.ObjectId(req.body.proId) ,color: req.body.color},{stock: (req.body.stock)}).then(data => {
            res.status(200).json({status:true,msg:"Stock Updated" , data:data})  
       }).catch(error => {
           res.status(400).json({status:false, msg:"Could not update stock !!  please try again later" , data:error})
       })
    }
   else {
         res.status(400).json({status:true ,msg : "stock amount can not be negetive !! give a positive number" })
   }
    
}
/////////////////////////////////////////////////

module.exports = {regStock,changeStock}