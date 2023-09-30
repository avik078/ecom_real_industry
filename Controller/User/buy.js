const mongoose = require("mongoose");

const Cart = require("../../Model/cart");

const User = require("../../Model/user");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");



const  checkOut = async  (req,res) => {
  
    const {userID} =  req
    await  Cart.aggregate([
        {$match : {cusId : new mongoose.Types.ObjectId(userID) }} ,
        {$lookup :{
            from: "products",
            localField: "proId",
            foreignField: "_id",
            as: "productDetails",
            pipeline: [
              {
                $group : {
                    _id : "$productDetails."
                }
              }
                ,
              {
                $project: {
                  __v: 0,
                }
              }
            ]
          }},
          {
            $lookup: {
              from: "users",
              localField: "cusId",
              foreignField: "_id",
              as: "userDetails",
              pipeline: [
                {
                  $project: {
                    __v: 0,
                  },
                },
              ],
            },
          } ,


        
    ]).then(data => {
        res.status(200).json({status:true , msg:'Check out successful !!',data:data})
    }).catch(error => {
        res.status(400).json({status:true , msg:'Server Error !! please try again !!',data:error})
    })

res.status(200).json({data:"This is check out path"})

}


module.exports = {checkOut}