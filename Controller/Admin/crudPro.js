const mongoose = require("mongoose");

const Admin = require("../../Model/admin");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");


////////////////////////////////////////////////////////////////////////////////////////// DELETE
const delPro = async (req,res) => {
    const {_id} = req.body
    await Product.deleteOne({_id: new mongoose.Types.ObjectId(_id)}).then (data => {
        res.status(200).json ({status:true ,msg:"Product Deleted successfully" , data:data })
    }).catch(error => {
        res.status(400).json({status:false, msg:"Product Delete unsuccessful !! please try again !!",data:error})
    })
}
/////////////////////////////////////////
const delCat = async (req,res) => {
    const {_id} = req.body
    await Category.deleteOne({_id: new mongoose.Types.ObjectId(_id)}).then (data => {
        res.status(200).json ({status:true ,msg:"Product Deleted successfully" , data:data })
    }).catch(error => {
        res.status(400).json({status:false, msg:"Product Delete unsuccessful !! please try again !!",data:error})
    })
}
//////////////////////////////////////////
const delSub = async (req,res) => {
    const {_id} = req.body
    await Subcategory.deleteOne({_id: new mongoose.Types.ObjectId(_id)}).then (data => {
        res.status(200).json ({status:true ,msg:"Product Deleted successfully" , data:data })
    }).catch(error => {
        res.status(400).json({status:false, msg:"Product Delete unsuccessful !! please try again !!",data:error})
    })
} 
/////////////////////////////////////////////////////////////////////////////////////////////// PUT

const putPro = async (req,res) => {
  
    const {_id} = req.body
    await Product.updateOne({_id: new mongoose.Types.ObjectId(_id)},req.body).then (data => {
        res.status(200).json ({status:true ,msg:"Product details update successfully" , data:data })
    }).catch(error => {
        res.status(400).json({status:false, msg:"Product details update unsuccessful !! please try again !!",data:error})
    })
}
///////////////////////////
const putCat = async (req,res) => {
 const  {_id} = req.body 
 await Category.updateOne({_id: new mongoose.Types.ObjectId(_id)},req.body).then(data => {
    res.status(200).json ({status:true ,msg:"category details update successful" , data:data })
}).catch(error => {
    res.status(400).json({status:false, msg:"Product details update unsuccessful !! please try again !!",data:error})
})

}
//////////////////////////////
const putSub = async (req,res) => {
    const  {_id} = req.body 
    await Subcategory.updateOne({_id: new mongoose.Types.ObjectId(_id)},req.body).then(data => {
       res.status(200).json ({status:true ,msg:"Subcategory details update successful" , data:data })
   }).catch(error => {
       res.status(400).json({status:false, msg:"Subcategory details update unsuccessful !! please try again !!",data:error})
   })
}
/////////////////////////////////////////////////////////////////////////
module.exports = {delPro,delCat,delSub,putPro,putCat,putSub}