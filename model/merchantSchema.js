const mongoose = require("mongoose")
const {Schema} = mongoose

const merchantList = new Schema ({
    storeName : {
        type : String ,
        required : true
    },
    storeEmail : {
        type : String ,
        required : true
    } ,
    storePhone : {
        type : String ,
        required : true
    } ,
    storeAddress : {
        type : String ,
        required : true
    },
    owner : {
        type : Schema.Types.ObjectId ,
        ref : "userList"
    } ,
    products : [
        {
            type : Schema.Types.ObjectId ,
            ref : "productList"
        }
    ]

})  

module.exports = mongoose.model("merchantList" , merchantList)