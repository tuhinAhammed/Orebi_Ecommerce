const jwt = require("jsonwebtoken")
const userList = require ("../model/userSchema")
async function emailVarificationController(req ,res){
    const {authorization} = req.headers
    const decoded = jwt.verify(authorization , 'tuhin_dev')
    //     console.log(decoded) // bar
    // console.log(authorization);
    const varifyConfirm = await userList.findOneAndUpdate(
        {email : decoded.email} ,
        {varified : true},
        {new : true}
        
    )
    //  const decodedFailed = jwt.verify(authorization , 'wrong-secret')
    //  const varifyFailed = await userList.findOneAndUpdate(
    //     {email : decodedFailed.email} ,
    //     {varified : false} ,
    //     {new : true}
    //  )
        // err
        // decoded undefined
    // if (authorization = ""){
    //     console.log({error : "Give the Authorizattion Code"});
    // }
    // if(!varifyConfirm){
    //     console.log({error : "Need Varification"});
    // }
    res.send(varifyConfirm);
}

module.exports = emailVarificationController