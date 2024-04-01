const userList = require("../model/userSchema")
const bcrypt = require('bcrypt');
const emailVarificationMail = require("../helper/sendEmail");
const emailValidation = require ("../helper/emailValidation");
const emailSendTemplate = require("../helper/emailSendTemplate");
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const password = 's0/\/\P4$$w0rD';
async function registration(req, res) {
    const {
        firstName,
        lastName,
        email,
        telephone,
        address,
        city,
        postCode,
        division,
        district,
        password
    } = req.body;
    console.log(req.body);
    if (!firstName) {
        return res.send({
            error: "first Name is Required"
        })
    }
    if (!lastName) {
        return res.send({
            error: "Last Name is Required"
        })
    }
    if (!email) {
        return res.send({
            error: "Email is Required"
        })
    }
    if(!emailValidation (email)){
        return res.json({error : "Email Is Not Valid"})
    }

    if (!password) {
        return res.send({
            error: "Password Is Required"
        })
    }

    const exitEmail = await userList.findOne({email}) 
    if (exitEmail){
        return res.send({error : "This Email Is Already Used"})
    }
    bcrypt.hash(password, saltRounds, function (err, hash) {
        const users = new userList({
            firstName,
            lastName,
            email,
            telephone,
            address,
            city,
            postCode,
            division,
            district,
            password: hash
        })
        var token = jwt.sign({ email }, 'tuhin_dev');
        emailVarificationMail(email , emailSendTemplate(token))
        // console.log(users)
        users.save()
        res.send({
            success : "Registration Successfully Done , Please Check Your Email For Varification" ,
            data : users
        })
    });

}

module.exports = registration