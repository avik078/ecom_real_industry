const mongoose = require('mongoose') ;



const productSchema = mongoose.Schema( 
    
    {   
        categoryId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        SubCategoryId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        name:{
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

