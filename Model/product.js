const mongoose = require('mongoose') ;



const productSchema = mongoose.Schema( 
    
    {   
        catId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        subId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        proName:{
            type:String ,
            required:[true , ""]
        } ,
        details : {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            type: String ,
            required:[true , ""]
        },
        price : {
            type: Number ,
            required:[true , ""]
        } ,
        stock : {
            type: Number ,
            required:[true , ""]
        } ,
        status: {
            type: Boolean,
            default: true
          },
        isDeleted: {
            type: Boolean,
            default :false
        },
        discountPrice : {
            type: Number ,
            required:[true , ""]
        } ,
        color : {
            type: String ,
            required:[true , ""]
        },
        rating : {
            type: Number 
        } ,
        
        image : {
            type:String ,
            default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJwbef0PpvHIGYkNvZSFSHcD2vKdZuhLujWSmiNGmgw&s"
        }

    } 
    ,
    {
        timestamps: true
    }
)



const Product  = mongoose.model('product',productSchema) ;

module.exports = Product ;

