const mongoose = require("mongoose");

const Cart = require("../../Model/cart");

const User = require("../../Model/user");

const Order = require("../../Model/order");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Subcategory = require("../../Model/subcategory");

/////////////////////////////////////////////////////////////////////////// Final order 
const finalOrder = async (req, res) => {

  const { userID } = req;
  ////////////
  console.log("This Buy route")
  const  {proName,totalPrice,payment} = req.body
  const newOb = {
    payment : payment ,
    totalPrice : totalPrice , 
    cusId: new mongoose.Types.ObjectId(userID),
    randomId:
      req.body.proName.slice(0, 4) +
      Math.floor(Math.floor(Math.random() * 10000000)),
  };
  await Order.create(newOb)
    .then((data) =>
      res
        .status(200)
        .json({ status: true, msg: "Order Buy successful", data: data })
    )
    .catch((error) =>
      res
        .status(400)
        .json({
          status: false,
          msg: "Could not check out please try again !!",
          data: error,
        })
    );
};
 
/////////////////////////////////////////////////////////////////////////  Buy with quantity 
// const checkOut = async (req, res) => {
//   console.log("This is ");
//   const { userID } = req;
//   await Cart.aggregate([
//     { $match: { cusId: new mongoose.Types.ObjectId(userID) } },

//     {
//       $lookup: {
//         from: "products",
//         localField: "proId",
//         foreignField: "_id",
//         as: "productDetails",
//         pipeline: [
//           {
//             $project: {
//               proName: 1,
//               price: 1,
//             },
//           },
//         ],
//       },
//     },
//     // {
//     //   $lookup: {
//     //     from: "users",
//     //     localField: "cusId",
//     //     foreignField: "_id",
//     //     as: "userDetails",
//     //     pipeline: [
//     //       {
//     //         $project: {
//     //           name: 1,
//     //           address: 1,
//     //         },
//     //       },
//     //     ],
//     //   },
//     // },
//     { $unwind: "$productDetails" },

//     {
//       $project: {
//         proid: 1,
//         cusId: 1,
//         quantity: 1,
//         productDetails: 1,
//         userDetails: 1,
//         total: { $multiply: ["$productDetails.price", "$quantity"] },
//       },
//     },
//     // {
//     //     $group :  {
//     //           _id : "$cusId" ,
//     //           totalPrice : {$multiply: ['$quantity' , '$productDetails.price'] }
//     //     }
//     // }
//   ])
//     .then((data) => {
//       res.status(200).json({
//         status: true,
//         msg: "Check out successful , CART DATA --> !!",
//         data: data,
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         status: false,
//         msg: "Server Error !! please try again !!",
//         data: error,
//       });
//     });

//   res.status(200).json({ data: "This is check out path" });
// };
/////////////////////////////////////////////

module.exports = { finalOrder };
