const mongoose = require('mongoose') ;




const subCategorySchema = mongoose.Schema( 
    {   
        subcategoryId:{
            type: mongoose.Schema.Types.ObjectId ,
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
        name:{
            type:String ,
            required:[true , ""]
        } 
    } 
    ,
    {
        timestamps: true
    }
)

const Subcategory  = mongoose.model('subcategory',subCategorySchema) ;

module.exports = Subcategory ;

