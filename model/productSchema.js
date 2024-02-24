const mongoose = require("mongoose") ;
const {Schema} = mongoose ;


const productSchema = new Schema ({
    name : {
        type : String ,
        Required : true
    } ,
    description : {
        type : String ,
        required : true
    } ,
    image : {
        type : String ,
        
    },
    variants : [
        {
            type : Schema.Types.ObjectId ,
            ref : "variants"
        }
    ] ,
    store : {
        type : Schema.Types.ObjectId ,
        ref : "merchantList"
    } ,
    created : {
        type : Date ,
        default : new Date
    },
    updated : {
        type : Date ,
        default : new Date
    }
})

module.exports = mongoose.model("productList" , productSchema)