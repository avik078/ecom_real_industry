const mongoose = require("mongoose");

const User = require("../../Model/user");

const Product = require("../../Model/product");

const  Stock =  require("../../Model/stock")

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");

////////////////////////////////////// GET ALL
const getAll = async (req, res) => {
  /////////////////////////////////////////
  const { userID } = req;
  console.log(userID);
  console.log(typeof userID);

  await Product.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "catId",
        foreignField: "_id",
        as: "category",
        pipeline: [
          {
            $project: {
              catName: 1,
              _id: 0,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "subcategories",
        localField: "subId",
        foreignField: "_id",
        as: "subCategory",
        pipeline: [
          {
            $project: {
              subName: 1,
              _id: 0,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "stocks",
        localField: "_id",
        foreignField: "proId",
        as: "stockToColor",
        pipeline: [
          {
            $project: {
              color:1,
              stock : 1 ,
              _id: 0,
            },
          },
        ],
      },
    } ,
    { $unwind: "$category" },
    { $unwind: "$subCategory" },
    {
      $addFields: {
        categoryName: "$category.catName",
        subcategoryName: "$subCategory.subName",
      },
    },
    {
      $project: {
        proName: 1,
        categoryName: 1,
        subcategoryName: 1,
        details: 1,
        price: 1,
        
        discountPrice: 1,
        color: 1,
        image: 1,
        stockToColor:1
      },
    },
    { $limit: 5 },
  ])
    .then((data) => {
      res
        .status(200)
        .json({ status: true, msg: "get data successfully", data: data });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "Server error !! please try again",
        data: error,
      });
    });
};

//////////////////////////////////// POST SEARCH keyword RegEx , GET all match

const getSearch = async (req, res) => {
  const { keyword } = req.params;
  // const { keyword } = req.body;
  console.log(keyword);
  const { userID } = req;
  console.log(userID);
  console.log(typeof userID);
  await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
    .then(async (data) => {
      if (!data) {
        res
          .status(200)
          .json({ status: false, msg: "User is not registed in DB" });
      } else {
        ////\/\/\/\/\/\/\/\
        await Product.aggregate([
          { $match: { proName: { $regex: `${keyword}`, $options: "i" } } },
          {
            $lookup: {
              from: "categories",
              localField: "catId",
              foreignField: "_id",
              as: "category",
              pipeline: [
                {
                  $project: {
                    catName: 1,
                    _id: 0,
                  },
                },
              ],
            },
          },
          {
            $lookup: {
              from: "subcategories",
              localField: "subId",
              foreignField: "_id",
              as: "subCategory",
              pipeline: [
                {
                  $project: {
                    subName: 1,
                    _id: 0,
                  },
                },
              ],
            },
          },
          {
            $lookup: {
              from: "stocks",
              localField: "_id",
              foreignField: "proId",
              as: "stockToColor",
              pipeline: [
                {
                  $project: {
                    color:1,
                    stock : 1 ,
                    _id: 0,
                  },
                },
              ],
            },
          } ,
          { $unwind: "$category" },
          { $unwind: "$subCategory" },
          {
            $addFields: {
              categoryName: "$category.catName",
              subcategoryName: "$subCategory.subName",
            },
          },
          {
            $project: {
              proName: 1,
              categoryName: 1,
              subcategoryName: 1,
              details: 1,
              price: 1,
              
              discountPrice: 1,
              color: 1,
              image: 1,
              stockToColor:1
            },
          },
          { $limit: 5 },
        ])
          .then((data) => {
            res
              .status(200)
              .json({ status: true, msg: "get data successfully", data: data });
          })
          .catch((error) => {
            res.status(400).json({
              status: false,
              msg: "Server error !! please try again",
              data: error,
            });
          });
        // /\\/\/\/\/\/\/\/\
      }
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "server error !! Please try again",
        data: error,
      });
    });
};
//////////////////////////////////////////////// POST category _id , GET all match
const getCategoryWise = async (req, res) => {
  const { catId } = req.params;
  // const { catId } = req.body;
  console.log(catId);
  const { userID } = req;
  console.log(userID);
  console.log(typeof userID);
  await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
    .then(async (data) => {
      if (!data) {
        res
          .status(200)
          .json({ status: false, msg: "User is not registed in DB" });
      } else {
        /////////////////
        await Product.aggregate([
          { $match: { catId: new mongoose.Types.ObjectId(catId) } },
          {
            $lookup: {
              from: "categories",
              localField: "catId",
              foreignField: "_id",
              as: "category",
              pipeline: [
                {
                  $project: {
                    catName: 1,
                    _id: 0,
                  },
                },
              ],
            },
          },
          {
            $lookup: {
              from: "subcategories",
              localField: "subId",
              foreignField: "_id",
              as: "subCategory",
              pipeline: [
                {
                  $project: {
                    subName: 1,
                    _id: 0,
                  },
                },
              ],
            },
          },
          {
            $lookup: {
              from: "stocks",
              localField: "_id",
              foreignField: "proId",
              as: "stockToColor",
              pipeline: [
                {
                  $project: {
                    color:1,
                    stock : 1 ,
                    _id: 0,
                  },
                },
              ],
            },
          } ,
          { $unwind: "$category" },
          { $unwind: "$subCategory" },
          {
            $addFields: {
              categoryName: "$category.catName",
              subcategoryName: "$subCategory.subName",
            },
          },
          {
            $project: {
              proName: 1,
              categoryName: 1,
              subcategoryName: 1,
              details: 1,
              price: 1,
              
              discountPrice: 1,
              color: 1,
              image: 1,
              stockToColor:1
            },
          },
          ])
          .then((data) => {
            if (data.length > 0) {
              res.status(200).json({
                status: true,
                msg: "Category get successfully",
                data: data,
              });
            } else {
              res.status(400).json({
                status: false,
                msg: "Could not get category",
                data: data,
              });
            }
          })
          .catch((error) =>
            res.status(400).json({
              status: false,
              msg: "Could not get category , no such category in DB",
              data: error,
            })
          );
      }
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "server error !! Please try again",
        data: error,
      });
    });
};
//////////////////////////////////////////////// POST subcategory _id , GET all match
const getSubWise = async (req, res) => {
  const { subId } = req.params;
  // const { subId } = req.body;
  console.log(subId);
  const { userID } = req;
  console.log(userID);
  console.log(typeof userID);
  await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
    .then(async (data) => {
      if (!data) {
        res
          .status(200)
          .json({ status: false, msg: "User is not registed in DB" });
      } else {
        await Product.aggregate([
          { $match: { subId: new mongoose.Types.ObjectId(subId) } },
          {
            $lookup: {
              from: "categories",
              localField: "catId",
              foreignField: "_id",
              as: "category",
              pipeline: [
                {
                  $project: {
                    catName: 1,
                    _id: 0,
                  },
                },
              ],
            },
          },
          {
            $lookup: {
              from: "subcategories",
              localField: "subId",
              foreignField: "_id",
              as: "subCategory",
              pipeline: [
                {
                  $project: {
                    subName: 1,
                    _id: 0,
                  },
                },
              ],
            },
          },
          {
            $lookup: {
              from: "stocks",
              localField: "_id",
              foreignField: "proId",
              as: "stockToColor",
              pipeline: [
                {
                  $project: {
                    color:1,
                    stock : 1 ,
                    _id: 0,
                  },
                },
              ],
            },
          } ,
          { $unwind: "$category" },
          { $unwind: "$subCategory" },
          {
            $addFields: {
              categoryName: "$category.catName",
              subcategoryName: "$subCategory.subName",
            },
          },
          {
            $project: {
              proName: 1,
              categoryName: 1,
              subcategoryName: 1,
              details: 1,
              price: 1,
              
              discountPrice: 1,
              color: 1,
              image: 1,
              stockToColor:1
            },
          },

        ])
          .then((data) => {
            if (data.length > 0) {
              res.status(200).json({
                status: true,
                msg: "Category get successfully",
                data: data,
              });
            } else {
              res.status(400).json({
                status: false,
                msg: "Could not get category",
                data: data,
              });
            }
          })
          .catch((error) =>
            res.status(400).json({
              status: false,
              msg: "Could not get category , no such category in DB",
              data: error,
            })
          );
      }
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "server error !! Please try again",
        data: error,
      });
    });
};

///////////////////////////////////

module.exports = { getAll, getSearch, getCategoryWise, getSubWise };
