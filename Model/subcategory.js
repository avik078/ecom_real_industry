const mongoose = require('mongoose') ;




const subCategorySchema = mongoose.Schema( 
    {   
       
        subName:{
            type:String ,
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

const Subcategory  = mongoose.model('subcategory',subCategorySchema) ;

module.exports = Subcategory ;

