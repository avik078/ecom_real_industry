const mongoose = require('mongoose') ;
const  ordpro= require('./ordpro')

const   orderSchema = mongoose.Schema( 
    {   
       
        orderInvoice: {                     // generated on backend side 
            type : String ,
            required: [true , ""]
        } ,
        cusId: {
            type: mongoose.Schema.Types.ObjectId,
            required:[true , ""]
          },
        ordpro : {
            type: [ordpro.schema] ,    // multiple object inide array // nested schema // from frontend
            required : [true ,""]
        } ,
        totalPrice: {
            type: Number ,
            required:[true , ""]
        },
        payment:{
            type:String,
            required:[true , ""]
        } ,
        status: {
            type: Boolean,
            default: true
          },
        isDeleted: {
            type: Boolean,
            default :false
        }   
    } 
    ,
    {
        timestamps: true
    }
)

const Order  = mongoose.model('orderDetail',orderSchema) ;

module.exports = Order ;

