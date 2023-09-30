const mongoose = require('mongoose') ;



const   ordproSchema = mongoose.Schema( 
    {   
         
        ordId:{
            type: mongoose.Schema.Types.ObjectId,
            required:[true , ""]
        } ,
        cusId:{
            type: mongoose.Schema.Types.ObjectId,
            required:[true , ""]
          },
        proId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
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

const OrderProduct  = mongoose.model('orderproduct',ordproSchema) ;

module.exports = OrderProduct ;

