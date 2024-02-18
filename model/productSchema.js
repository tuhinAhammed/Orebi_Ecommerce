const mongoose = require("mongoose") ;
const {Schema} = mongoose ;


const productList = new Schema ({
    name : {
        type : String ,
        Required : true
    } ,
    description : {
        type : String ,
        required : true
    } ,
    
})