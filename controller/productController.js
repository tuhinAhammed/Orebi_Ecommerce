const userList = require("../model/userSchema")
async function createProductSecurity(req ,res , next){
    const userId = req.headers.authorization.split("@")[1]
    const password = req.headers.authorization.split("@")[2]
    if (!req.headers.authorization){
        console.log("Unauthorized")
    }
    else{
        const user = await userList.find({_id : userId})
        if(user.length > 0){
            if (password == "123zxc" && user[0].role == "merchant"){
                next()
            }
            else{
                res.json({
                    error : "You Are Not Able to Create Product"
                })
            }
        }
        else {
            res.json("You Are Not Able to Create Product")
        }
    }

}
function createProduct(req ,res){
    res.json({
        success : "Product Create Successfully Done"
    })
}
module.exports = {createProductSecurity , createProduct}