// database userName : orebiecommerce
// database password : 8SEoZCn89QvYOAXt
// database Name : orebiEcom
// mongodb+srv://<username>:<password>@tuhinahammed.dkanykh.mongodb.net/?retryWrites=true&w=majority
const express = require("express")
const mongoose = require('mongoose');
// import mongoose from 'mongoose';
function dbConnection(){
    mongoose.connect('mongodb+srv://orebiecommerce:8SEoZCn89QvYOAXt@tuhinahammed.dkanykh.mongodb.net/orebiEcom?retryWrites=true&w=majority').then(() => console.log("connected"))
}
module.exports = dbConnection
                                