const express = require("express") ;
const dbConnection = require("./config/dbConnection");
const app = express() ;
const bodyParser = require('body-parser')
dbConnection()
var cors = require('cors')
app.use(express.json())
app.use(cors())
// body parser
app.use(bodyParser.urlencoded({ extended: true }))
const  Route  = require("./Route");
app.use(Route)
app.get("/" , (req , res) => {
    res.send("All Is Well")
})
const port = 4000 ;
app.listen(port , () =>{
    console.log(`This Port Is Run From  ${port}`);
})
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))