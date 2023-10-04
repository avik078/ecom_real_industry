const mongoose = require("mongoose");

const User = require("../../Model/user");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");

const Wish = require("../../Model/wish");

/////////////////////////////////////////////////////////////////////////////////////
const addwish  = async (req,res) => {
   

  const  {userID} =  req
  const {proId} = req.body
   console.log(userID)
  await Wish.findOne({cusId: new mongoose.Types.ObjectId(userID) , proId: new mongoose.Types.ObjectId(proId)}).
  then( async (data) => {
    if (!data){
        await Wish.create({cusId: new mongoose.Types.ObjectId(userID) , proId: new mongoose.Types.ObjectId(proId)}).then(data=>{
        res.status(200).json({status:true, msg:"Added to wish List successfully" ,data:data})
        }).catch(error => res.status(400).json({status:false , msg: "Could no addd to wishList !!Try again" , data:error}))
    }else{
        await Wish.deleteOne({cusId: new mongoose.Types.ObjectId(userID) , proId: new mongoose.Types.ObjectId(proId)}).then(async (data)=>{
        res.status(200).json({status:true, msg:"Removed from wishlist successfully" ,data:data})
        }).catch(error => res.status(400).json({status:false , msg: "Could no addd to wishList !!Try again" , data:error}))
    }
}
).
 catch(error => res.status(400).json({status:true , msg:"server error !! try again !!", data:error}))
}


module.exports = {addwish}