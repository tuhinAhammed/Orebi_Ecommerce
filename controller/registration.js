const UserList = require("../model/userSchema")
function registration (req,res){
    const {firstName , lastName , email , telephone , address ,city , postCode , division , district , password  } = req.body ;
    console.log(req.body);
    const users = new UserList({
        firstName ,
        lastName ,
        email ,
        telephone ,
        address ,
        city ,
        postCode ,
        division ,
        district ,
        password
    })
    console.log(users)
    users.save()
    res.send(users)
}

module.exports = registration