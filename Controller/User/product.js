const mongoose = require("mongoose");

const User = require("../../Model/user");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");

////////////////////////////////////// GET ALL
const getAll = async (req, res) => {
  ////////////////////
  const { userID } = req;
  console.log(userID)
  console.log(typeof userID)
  await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
    .then(async (data) => {
      if (!data) {
        res
          .status(200)
          .json({ status: false, msg: "User is not registed in DB" });
      } else {
        res.send("Hi This all get route");
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
};

//////////////////////////////////// GET SEARCH
const getSearch = async (req, res) => {
  const { userID } = req;
  await User.findOne({ _id: new mongoose.Types.ObjectId(userID) })
    .then(async (data) => {
      if (!data) {
        res
          .status(200)
          .json({ status: false, msg: "User is not registed in DB" });
      } else {
        res.send("Hi This is searched route");
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
};
///////////////////////////////////

module.exports = { getAll, getSearch };
