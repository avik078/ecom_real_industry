const mongoose = require("mongoose");

const User = require("../../Model/user");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");



/////////////////////////////////////////////////////////////////// GET from Cart
const  getCart = async (req,res) => {
    res.status(200).json({msg:"This is get from cart"})
}
////////////////////////////////////////////////////////////////// ADD to cart 
const addToCart = async (req,res) => {

   res.status(200).json({msg:"This is addToCart"})

}

/////////////////////////////////////////////////////////////////////////

module.exports = { addToCart,getCart};