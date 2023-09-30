const mongoose = require('mongoose') ;



const   orderSchema = mongoose.Schema( 
    {   
         
        cusId: {
            type: mongoose.Schema.Types.ObjectId,
            required:[true , ""]
          },
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

const Order  = mongoose.model('order',orderSchema) ;

module.exports = Order ;

