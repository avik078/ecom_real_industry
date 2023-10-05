const mongoose = require("mongoose");

const Cart = require("../../Model/cart");

const User = require("../../Model/user");

const Order = require("../../Model/orderDetails");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Stock = require("../../Model/stock")

const StockHistory = require("../../Model/stockHistory");

const Subcategory = require("../../Model/subcategory");

/////////////////////////////////////////////////////////////////////////// Final check out with generate order id
const finalOrder = async (req, res) => {
  //\/\/\/\/\/\/\/\/ when ever order is placed successfully launch a query to
  //\/\/\/\/\/\// , empty the cart data in Db , to avoid duplicate order place
  const { userID } = req;

  console.log("This Buy route");
  const { proName, totalPrice, payment } = req.body;
  const  orderId = Math.floor(Math.floor(Math.random() * 10000000)) + "" ;
  const newOb = {
    ...req.body,
    orderInvoice: orderId,
  };
  await Order.create(newOb)
    .then(
               async (data) => {
         /* 1*/      const d = await Cart.deleteMany({ cusId: new mongoose.Types.ObjectId(userID) })
        /* 2*/       req.body.ordpro.forEach(async element => {
                        try {  
                              const updatestock = await Stock.updateOne({
                                    proId : new mongoose.Types.ObjectId(element._id) ,
                                    color: { $regex: `${element.color}`, $options: "i" }, 
                                    },
                                    { $inc: { stock: -Math.abs((Number(element.quantity))) } }
                                )

          /* 3*/            const updatestockHistory = await StockHistory.create(
                                  {
                                    usrId : new mongoose.Types.ObjectId(userID) ,
                                    ordId:orderId,
                                    proId: new mongoose.Types.ObjectId(element._id) ,
                                    qty : element.quantity,
                                    color : element.color , 
                                  }
                             )
                              
                        }catch(error) {
                         res.status(400).json({status:false,msg:"Server error !! please try again !!", data:error}) 
                        }    
                     });

           
      /* 5*/      res.status(200).json({ status: true, msg: "Order Buy successful" });
               }
         ) 
          .catch((error) => {
            res
              .status(200)
              .json({
                status: true,
                msg: "Could not place order successfully !! try again !!",
              });
          })
    

};

module.exports = { finalOrder };
