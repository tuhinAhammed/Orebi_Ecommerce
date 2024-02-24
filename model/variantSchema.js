const mongoose = require("mongoose")
const {Schema} = mongoose

const productVariants = new Schema({
    name :{
        type : String ,
        required : true
    },
    image :{
        type : String
    } ,
    price : {
        type : String ,
        required: true
    } ,
    quantity : {
        type : String
    } ,
    color : {
        type : String
    },
    size : {
        type : String
    } ,
    ram : {
        type : String
    } ,
    rom : {
        type : String
    },
    storage : {
        type : String
    },
    product : {
        type : Schema.Types.ObjectId ,
        ref : "productList"
    } ,
    created : {
        type : Date ,
        default : new Date
    } ,
    updated : {
        type : Date ,
        default : new Date
    }
})

module.exports = mongoose.model("variants" , productVariants)