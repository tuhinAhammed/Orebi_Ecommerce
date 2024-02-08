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
        required : true
    },
    address :{
        type : String ,
        required : true
    },
    city : {
        type : String ,
        rewuired : true
    } ,
    postCode : {
        type : String ,
        required : true
    } ,
    division : {
        type : String ,
        requiored : true
    },
    district : {
        type : String ,
        required : true
    } ,
    password : {
        type : String ,
        required : true
    }
})

module.exports = mongoose.model("userList" , userSchema)