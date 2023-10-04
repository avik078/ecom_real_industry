const mongoose = require('mongoose') ;


const wishSchema = mongoose.Schema( 

    {
        cusId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } ,
        proId:{
            type: mongoose.Schema.Types.ObjectId ,
            required:[true , ""]
        } 
    } 
    ,
    {
        timestamps: true
    }

)

const Wish = mongoose.model('wishList',wishSchema) ;

module.exports = Wish ;

