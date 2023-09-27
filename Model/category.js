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

const Category  = mongoose.model('category',categorySchema) ;

module.exports = Category ;

