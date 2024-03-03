const express = require("express") ;
const dbConnection = require("./config/dbConnection");
const app = express() ;
const port = 4000 ;
dbConnection()
app.use(express.json())
const  Route  = require("./Route");
app.use(Route)
app.get("/" , (req , res) => {
    res.send("All Is Well")
})
app.listen(port , () =>{
    console.log(`This Port Is Run From  ${port}`);
})
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))