const userList = require("../model/userSchema")
const productList = require("../model/productSchema")
const variantList = require("../model/variantSchema")
const multer  = require('multer')
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
function createProductController(req ,res){
    const {name , description , store , image } = req.body ;
    const products = new productList({
        name ,
        description ,
        store ,
        image 

    })
    products.save()
    console.log(req.body)
    res.json({
        success : "Product Create Successfully Done"
    })
}
async function createVariantController(req ,res){
    const {name , description , price , color , size , ram , rom , storage , quantity , product} = req.body ;

    // const variants = new variantList({
    //     name ,
    //     description ,
    //     color , 
    //     size ,
    //     ram , 
    //     rom , 
    //     storage ,
    //     price ,
    //     quantity ,
    //     product
    // })
    // variants.save()
    // await productList.findOneAndUpdate(
    //     {_id : variants.product} ,
    //     {$push : {variants : variants._id}} ,
    //     {new : true}
    // )
    // res.send({
    //     success : "Product Variant Is Created"
    // })
}
async function getProduct (req, res){
    const getProductData = await productList.find({}).populate("variants")
    res.json(getProductData)

}
async function getVariants(req , res){
   const variantsListData = await variantList.find({})
   res.json(variantsListData)
}
module.exports = {createProductSecurity , createProductController , createVariantController , getProduct ,getVariants}