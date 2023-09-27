const mongoose = require('mongoose') ;




const categorySchema = mongoose.Schema( 
    
    {   
        categoryId:{
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

const Category  = mongoose.model('category',categorySchema) ;

module.exports = Category ;

