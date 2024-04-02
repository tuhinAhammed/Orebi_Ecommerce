const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    firstName :{
        type : String ,
        required : true
    } , 
    lastName : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    telephone : {
        type : String , 
    },
    address :{
        type : String ,
    },
    city : {
        type : String ,
    } ,
    postCode : {
        type : String 
    } ,
    division : {
        type : String 
    },
    district : {
        type : String ,
    } ,
    password : {
        type : String ,
        required : true
    },
    varified : {
        type : Boolean ,
        default : false
    } ,
    role :{
        type : String ,
        default : "member" ,
        enum : ["merchant" , "admin" , "member"]
    },
    token :{
        type : String
    }

})

module.exports = mongoose.model("userList" , userSchema)