
const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");


///////////////////////////////////////////////////////////POST Product
const postPro = async(req,res) => {
    res.send("THis is post pro admin")
} 

///////////////////////////////////////////////////////////POST category
const postCat = async(req,res) => {
    res.send("This post  cat admin")
} 

///////////////////////////////////////////////////////////POST subcategory
const postSub = async(req,res) => {
    res.send("This is post sub admin")
} 


module.exports = {postPro,postCat,postSub}