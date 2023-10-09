const mongoose = require("mongoose");

const Cart = require("../../Model/cart");

const User = require("../../Model/user");

const Order = require("../../Model/orderDetails");

const Product = require("../../Model/product");

const Category = require("../../Model/category");

const Stock = require("../../Model/stock");

const StockHistory = require("../../Model/stockHistory");

const Subcategory = require("../../Model/subcategory");

/////////////////////////////////////////////////////////////////////////// Final check out with generate order id
const finalOrder = async (req, res) => {
    //\/\/\/\/\/\/\/\/ when ever order is placed successfully launch a query to
    //\/\/\/\/\/\// , empty the cart data in Db , to avoid duplicate order place
    const { userID } = req;
    
    let flag = false;
    let buyItem = null;
    console.log("This Buy route");
    const { proName, totalPrice, payment } = req.body;
    const orderId = Math.floor(Math.floor(Math.random() * 10000000)) + "";
    const newOb = {
        ...req.body,
        orderInvoice: orderId,
    };

    
    const session = await mongoose.startSession();
    try {
       
        session.startTransaction(); 
        let flag  = false
        let prName
        for (let pr of req.body.ordpro ) {
             ///////////////////////////////////////////   1
             const quantityAvailable = await Stock.findOne({
                proId: new mongoose.Types.ObjectId(pr._id),
                color: { $regex: `${pr.color}`, $options: "i" }
             } ,null  , { session });
            console.log(quantityAvailable.stock)
            ///////////////////////////////////////
        
            if (quantityAvailable.stock > Math.abs(Number(pr.quantity))) {

                const updatestock = await Stock.updateOne(
                    {
                      proId: new mongoose.Types.ObjectId(pr._id),
                      color: { $regex: `${pr.color}`, $options: "i" },
                    },
                    { $inc: { stock: -Math.abs(Number(pr.quantity)) } } ,
                    { session }
                  );

                  const updatestockHistory = await StockHistory.create([{
                    usrId: new mongoose.Types.ObjectId(userID),
                    ordId: orderId,
                    proId: new mongoose.Types.ObjectId(pr._id),
                    qty: pr.quantity,
                    color: pr.color,
                  }],{ session });

            }else {
                prName = pr.proName
                flag = true ;
                break ;
            }
        }
        if (flag){
            await session.abortTransaction() 
            res.status(400).json({status:false,msg:`😣 Could not buy stock not available for ${prName} !!`})
        }else {
            const newOrder =  await Order.create([newOb],{ session })
            const deleteFromCart = await Cart.deleteMany({cusId: new mongoose.Types.ObjectId(userID)},{ session });
            await session.commitTransaction() 
            res.status(200).json({status:true,msg:"😃 Buy successful !!"}) 
        }     
    }catch (error) {
        console.log("An error occurred during the transaction:" + error);
        res.status(400).json({status:false,msg:"Server error !! try again !!",data:error})
        await session.abortTransaction()
    }finally{
        await session.endSession()
    }
      
};

module.exports = { finalOrder };