const mongoose = require('mongoose') ;



const   ordproSchema = mongoose.Schema( 
    {   
        quantity:{
            type: Number,
            default:1
        } ,
        _id:{  
            type: mongoose.Schema.Types.ObjectId ,       
            required:[true , ""]
        } ,
        catId:{  
            type: mongoose.Schema.Types.ObjectId ,       
            required:[true , ""]
        } ,
        subId:{  
            type: mongoose.Schema.Types.ObjectId ,       
            required:[true , ""]
        } ,
        proName: {
            type : String ,
            required: [true , ""]
        } ,
        details: {
            type : String ,
            required: [true , ""]
        } ,
        buyPrice: {
            type: Number ,
            required:[true , ""]
        },
        color: {
            type: String ,
            required:[true , ""]
        },
        image: {
            type: String ,
            required:[true , ""]
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

const OrderProduct  = mongoose.model('orderproduct',ordproSchema) ;

module.exports = OrderProduct ;

