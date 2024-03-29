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
    const {name , description , price , image , color , size , ram , rom , storage , quantity , product} = req.body ;
    console.log(req.file.filename)
    const variants = new variantList({
        name ,
        image : `http://localhost:4000/uploads/${req.file.filename}` ,
        description ,
        color , 
        size ,
        ram , 
        rom , 
        storage ,
        price ,
        quantity ,
        product
    })
    variants.save();

    await productList.findOneAndUpdate(
        {_id : variants.product} ,
        {$push : {variants : variants._id}} ,
        {new : true}
    )
    const data = await variantList.find({})
    res.json(data)
}
async function getProduct (req, res){
    const getProductData = await productList.find({}).populate("store")
    res.send(getProductData)
}

async function productDeleteController(req ,res){
    const deleteData = await productList.findByIdAndDelete(req.body.demo)
    res.send(deleteData)
}

async function getVariants(req , res){
   const variantsListData = await variantList.find({})
   res.json(variantsListData)
}
module.exports = {createProductSecurity , createProductController , createVariantController , getProduct ,getVariants , productDeleteController}