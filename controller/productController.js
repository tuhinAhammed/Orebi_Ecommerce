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
        image : `http://localhost:4000/uploads/${req.file.filename}`
    })
    products.save()
    console.log(req.body)
    res.json({
        success : "Product Create Successfully Done"
    })
}
async function createVariantController(req ,res){
    const {name , description , price , image , color , size , ram , rom , storage , quantity , product} = req.body ;
    console.log(req.file)
    console.log(req.body);
    if (!name){
       return res.json ({
        error : "Enter Variant Name"
       })
    }
    if (!description){
       return res.json ({
        error : "Enter Variant description"
       })
    }
    if (!price){
       return res.json ({
        error : "Enter Variant price"
       })
    }
    if (!color){
       return res.json ({
        error : "Select a color"
       })
    }
    if (!size){
       return res.json ({
        error : "Enter Variant size"
       })
    }
    if (!ram){
       return res.json ({
        error : "Enter Variant ram"
       })
    }
    if (!storage){
       return res.json ({
        error : "Enter Variant storage"
       })
    }
    if (!quantity){
       return res.json ({
        error : "Enter Variant quantity"
       })
    }
    if (!product){
       return res.json ({
        error : "Enter Variant Name"
       })
    }
    const variants = new variantList({
        name ,
        image : `http://localhost:4000/uploads/${req.file.filename}` ,
        description ,
        product ,
        color , 
        size ,
        ram , 
        rom , 
        storage ,
        price ,
        quantity 
        
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
    const getProductData = await productList.find({}).populate(["store" , "variants"])
    res.send(getProductData)
}
// kkkwdqkd

async function productDeleteController(req ,res){
    const deleteData = await productList.findByIdAndDelete(req.body.demo)
    res.send(deleteData)
}

async function getVariants(req , res){
   const variantsListData = await variantList.find({}).populate("product")
   res.send(variantsListData)
}
async function deleteVariantControlller (req , res){
    const deleteData = await variantList.findOneAndDelete(req.body.data)
    res.send(deleteData)
}
module.exports = {createProductSecurity , createProductController , createVariantController , getProduct ,getVariants , productDeleteController , deleteVariantControlller}