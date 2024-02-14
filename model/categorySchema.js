const mongoose = require("mongoose")
const {Schema} = mongoose

const  categoryList= new Schema({
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
    Status : {
        type : String ,
        default : "waiting" ,
        enum : ["waiting" , "approved" , "rejected"]
    } ,
    subCategory : [
        {
            type : Schema.Types.ObjectId ,
            ref  : "subcategoryList"
        }
    ] ,
    created : {
        type : Date ,
        default : new Date()
    } ,
    update :{
        type : Date
    }
})
module.exports = mongoose.model("categoryList" , categoryList)