const mongoose = require('mongoose') ;




const subCategorySchema = mongoose.Schema( 
    {   
        subcategoryId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
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

