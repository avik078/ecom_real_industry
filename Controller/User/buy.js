const mongoose = require("mongoose");

const Cart = require("../../Model/cart");

const User = require("../../Model/user");

const Order = require("../../Model/orderDetails");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");

/////////////////////////////////////////////////////////////////////////// Final check out with generate order id
const finalOrder = async (req, res) => {
  //\/\/\/\/\/\/\/\/ when ever order is placed successfully launch a query to
  //\/\/\/\/\/\// , empty the cart data in Db , to avoid duplicate order place
  const { userID } = req;

  console.log("This Buy route");
  const { proName, totalPrice, payment } = req.body;
  const newOb = {
    ...req.body,
    randomId: Math.floor(Math.floor(Math.random() * 10000000)) + "",
  };
  await Order.create(newOb)
    .then(
      async (data) =>
        await Cart.deleteMany({ cusId: new mongoose.Types.ObjectId(userID) })
          .then((data) => {
            res.status(200).json({ status: true, msg: "Order Buy successful" });
          })
          .catch((error) => {
            res
              .status(200)
              .json({
                status: true,
                msg: "Could not place order successfully !! try again !!",
              });
          })
    )
    .catch((error) =>
      res.status(400).json({
        status: false,
        msg: "Could not check out please try again !!",
        data: error,
      })
    );
};

module.exports = { finalOrder };
