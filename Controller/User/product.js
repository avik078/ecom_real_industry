const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");


////////////////////////////////////// GET ALL 
const getAll = async (req,res) => {
    res.send("Hi This all get route")
}

//////////////////////////////////// GET SEARCH
const  getSearch = async(req,res) => {
    res.send("Hi This is searched route")
}
///////////////////////////////////

module.exports = { getAll , getSearch};
