const mongoose = require("mongoose");

const Admin = require("../../Model/admin");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");


///////////////////////////////////////////////////////////POST Product
const postPro = async (req, res) => {
  
  const  {userID} = req
  await  Admin.findOne({_id: new mongoose.Types.ObjectId(userID)}).then(async (data) => {
    if (!data) {
      res.status(200).json({status:false,msg:"Admin is not registed in DB"})
    }else{
      await Product.create(req.body).then((data)=> {  
        res.status(200).json({status:true,msg:"Product uploaded successfully" , data:data})
        }).catch((error)=> {
          res.status(400).json({status:false , msg: "Server Error ! please try again !! ",data:error})
        }) 
    }
  }).catch ((error) => {
       res.status(400).json({status:false,msg:"server error !! Please try again", data:error})
  })


};
///////////////////////////////////////////////////////////POST category
const postCat = async (req, res) => {

  const  {userID} = req

  await  Admin.findOne({_id: new mongoose.Types.ObjectId(userID)}).then(async (data) => {
    if (!data) {
      res.status(200).json({status:false,msg:"Admin is not registed in DB"})
    }else{
      await Category.findOne({ catName: req.body.catName })
    .then(async (data) => {
      if (!data) {
        await Category.create(req.body)
          .then((data) =>
            res.status(200).json({
              status: true,
              msg: "category added successfully",
              data: data,
            })
          )
          .catch((error) =>
            res.status(400).json({
              status: false,
              msg: "server error !! please try again",
              data: error,
            })
          );
      } else {
        res
          .status(200)
          .json({ status: false, msg: "category already exists", data: data });
      }
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "Server error !! please try again ",
        data: error,
      });
    });

    }
  }).catch ((error) => {
       res.status(400).json({status:false,msg:"server error !! Please try again", data:error})
  })


};
/////////////////////////////////////////////////////////// POST subcategory

const postSub = async (req, res) => {

  await  Admin.findOne({_id: new mongoose.Types.ObjectId(userID)}).then(async (data) => {
    if (!data) {
      res.status(200).json({status:false,msg:"Admin is not registed in DB"})
    }else{
      await Subcategory.findOne({ subName: req.body.subName })
    .then(async (data) => {
      if (!data) {
        await Subcategory.create(req.body)
          .then((data) =>
            res.status(200).json({
              status: true,
              msg: "sub category added successfully",
              data: data,
            })
          )
          .catch((error) =>
            res.status(400).json({
              status: false,
              msg: "server error !! please try again",
              data: error,
            })
          );
      } else {
        res
          .status(200)
          .json({ status: false, msg: "category already exists", data: data });
      }
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "Server error !! please try again ",
        data: error,
      });
    });
    }
  }).catch ((error) => {
       res.status(400).json({status:false,msg:"server error !! Please try again", data:error})
  })


};

module.exports = { postPro, postCat, postSub };
