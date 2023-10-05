const mongoose = require('mongoose') ;



const stockhisSchema = mongoose.Schema( 

    {   
        usrId : {
             type: mongoose.Schema.Types.ObjectId ,
             required:[true , ""]
        } ,
        ordId:{
            type: String,
            required:[true , ""]
        },
        proId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        },
        qty : {
            type: Number ,
            required:[true , ""]
        },
        color : {
            type: String ,
            required:[true , ""]
        },
    } 
    ,
    {
        timestamps: true
    }
)

const StockHistory  = mongoose.model('stock_history',stockhisSchema) ;

module.exports = StockHistory ;

