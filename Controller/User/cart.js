const mongoose = require("mongoose");

const User = require("../../Model/user");

const Cart = require("../../Model/cart");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

// const Subcategory = require("../../Model/subcategory");



/////////////////////////////////////////////////////////////////// GET from Cart
const  getCart = async (req,res) => {

    const  {user} = req 
     
   //  res.status(200).json({msg:"This is get from cart"})
}
////////////////////////////////////////////////////////////////// ADD to cart 
const addToCart = async (req,res) => {
    
    const { userID } = req 
    console.log(typeof userID)
    const newOb = {...req.body,cusId:userID}
    await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
      .then(async (data) => {
        if (!data) {
          res
            .status(400)
            .json({ status: false, msg: "User is not registed in DB register again" });
        } else {
          ////\/\/\/\/\/\/\/\/\/\/\/\/\
          await Cart.create(newOb).then((data)=> {
              res.status(200).json({status:true,msg:"added to cart successfully" , data:data})
          }).catch((error)=> {
               res.status(400).json({status:false,msg:"Server error !! could not added to cart please try again",data:error})
          })
          // /\\/\/\/\/\/\/\/\
        }
      })
      .catch((error) => {
        res
          .status(400)
          .json({
            status: false,
            msg: "server error !! Please try again",
            data: error,
          });
      });
       

   await Cart.create().then((data) => {}).catch((error) => {})

}

/////////////////////////////////////////////////////////////////////////

module.exports = { addToCart,getCart};