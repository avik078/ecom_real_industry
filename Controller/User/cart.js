const mongoose = require("mongoose");

const User = require("../../Model/user");

const Cart = require("../../Model/cart");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

// const Subcategory = require("../../Model/subcategory");

/////////////////////////////////////////////////////////////////// GET from Cart
const getCart = async (req, res) => {
  const { userID } = req;
  await Cart.aggregate([
    {
      $match: { cusId: new mongoose.Types.ObjectId(userID) },
    },
    {
      $lookup: {
        from: "products",
        localField: "proId",
        foreignField: "_id",
        as: "productDetails",
        pipeline: [
          {
            $project: {
              __v: 0,
            },
          },
        ],
      },
    },
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
    },
    {
      $project: {
        __v: 0,
      },
    },
  ])
    .then((data) => {
      res
        .status(200)
        .json({ status: true, msg: "Cart data get successfully", data: data });
    })
    .catch((error) => {
      res.status(200).json({
        status: true,
        msg: "server error !! please try again !",
        data: error,
      });
    });
};
////////////////////////////////////////////////////////////////// ADD to cart
const addToCart = async (req, res) => {
  const { userID } = req;
  console.log(typeof userID);
  const newOb = { ...req.body, cusId: userID };

  /////////////////////////////////////////////////////////////////
  await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
    .then(async (data) => {
      if (!data) {
        res.status(400).json({
          status: false,
          msg: "User is not registed in DB register again",
        });
      } else {
        ////\/\/\/\/\/\/\/\/\/\/\/\/\
        await Cart.create(newOb)
          .then((data) => {
            res.status(200).json({
              status: true,
              msg: "added to cart successfully",
              data: data,
            });
          })
          .catch((error) => {
            res.status(400).json({
              status: false,
              msg: "Server error !! could not added to cart please try again",
              data: error,
            });
          });
        // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/
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

//////////////////////////////////////////////////////  update quantity

const inQty = async (req, res) => {
  const { userID } = req;
  const { proId, quantity } = req.body;
  await Cart.updateOne({ proId: proId, cusId: userID }, { quantity: quantity })
    .then((data) => {
        res
        .status(200)
        .json({ status: true, msg: "Quantity added successfully", data: data });
    })
    .catch((error) => {
      res
        .status(400)
        .json({
          status: false,
          msg: "Server Error !! Please try again !!",
          data: error,
        });
    });
};

module.exports = { addToCart, getCart, inQty };
