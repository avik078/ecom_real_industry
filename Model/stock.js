const mongoose = require('mongoose') ;



const stockSchema = mongoose.Schema( 
    {   
        proId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        stock : {
            type: Number ,
            required:[true , ""]
        } ,
        color : {
            type: String ,
            required:[true , ""]
        }
    } 
    ,
    {
        timestamps: true
    }
)

const Stock  = mongoose.model('stock',stockSchema) ;
module.exports = Stock ;

