const mongoose = require('mongoose') ;



const cartSchema = mongoose.Schema( 
    {   
       
        proId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        cusId: {
            type: mongoose.Schema.Types.ObjectId,
            required:[true , ""]
          },
        color:{
           type: String ,
           require: [true , ""]    
        },
        quantity:{
            type: Number,
            default:1
        },
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

const Cart  = mongoose.model('cart',cartSchema) ;

module.exports = Cart ;

