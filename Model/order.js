const mongoose = require('mongoose') ;
const  ordproOb = require('./ordpro');


const   orderSchema = mongoose.Schema( 
    {   
       
        randomId: {                     // generated on backend side 
            type : String ,
            required: [true , ""]
        } ,
        cusId: {
            type: mongoose.Schema.Types.ObjectId,
            required:[true , ""]
          },
        ordpro : {
            type: [ordproOb.schema] ,    // multiple object inide array // nested schema // from frontend
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

const Order  = mongoose.model('order',orderSchema) ;

module.exports = Order ;

