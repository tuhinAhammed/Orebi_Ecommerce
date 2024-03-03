const mongoose = require("mongoose")
const {Schema} = mongoose

const discountSchema = new Schema ({
    cash :{
        type : String ,
    } ,
    flat :{
        type : Boolean ,
        default : false
    } ,
    percent : {
        type : String ,
    } ,
    category : {
        type : Schema.Types.ObjectId ,
        ref : "categoryList"
    },
    subCategory : {
        type : Schema.Types.ObjectId ,
        ref : "subcategoryList"
    } ,
    product :{
        type : Schema.Types.ObjectId ,
        ref : "productList"
    } ,
    created : {
        type : Date ,
        default : new Date()
    } ,
    update :{
        type : Date
    }
})

module.exports = mongoose.model("discount" , discountSchema ,  )