const mongoose = require("mongoose")
const {Schema} = mongoose

const  subCategoryList = new Schema({
    name : {
        type : String ,
        required : true
    } ,
    description : {
        type : String
    } ,
    isActive :{
        type : Boolean ,
        default : false
    } ,
    status : {
        type : String ,
        default : "waiting" ,
        enum : ["waiting" , "approved" , "rejected"]
    } ,
    category : {
        type : Schema.Types.ObjectId ,
        ref : "categoryList"
    } ,
    created : {
        type : Date ,
        default : new Date()
    } ,
    update :{
        type : Date
    }
})

module.exports = mongoose.model("subcategoryList" , subCategoryList)