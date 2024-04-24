const emailValidation = require("../helper/emailValidation");
const bcrypt = require('bcrypt');
const userList = require("../model/userSchema")

 async function loginController(req ,res){
    const {email , password} = req.body;
    if(!email){
        return res.json({error : "Enter Your Email"})
    }
    else if(!emailValidation(email)){
        return res.json({error : "Enter Your Valid Email"})
    }
    else if(!password){
        return res.json({error : "Enter Your Password"})
    }
    else{
        const emailExist = await userList.find({email })
        if(emailExist.length > 0 ){
            bcrypt.compare(password , emailExist[0].password).then( function(result) {
                if (result){
                     res.json({
                        success : "Login Successfully Done" ,
                        role : emailExist[0].role ,
                        email : emailExist[0].email
                    })
                }
                else{
                     res.json({error : "password Is Not Match"})
                }
                
            });
        }
        else {
            return res.json({error : "Email Is Not Match"})
        }
        // const passwordExist = await userList.find({password})
        //  if (passwordExist > 0 ){
        //     colsole.log(passwordExist)
        // }
        // else {
        //     return res.json({error : "Password Is Not Match"})
        // }
    }
    // console.log("its working")
}
module.exports = loginController