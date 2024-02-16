const merchantList = require("../model/merchantSchema")
const userList = require("../model/userSchema")
async function becomeMerchantController(req ,res){
    const {storeName , storeEmail , storeAddress , storePhone , owner , products} = req.body
    console.log(req.body)
    if(!storeName) {
        return res.json({error : "enter Store Name"})
    }
    else if (!storeEmail){
        return res.json ({error : " Enter Your Store Email"})
    }
    else if (!storeAddress){
        return res.json({error : "Enter Your Store Address"})
    }
    else if (!storePhone){
        return res,json({error : "Enter Your Store Phone Number"})
    }
     const merchant = new merchantList({
        storeName ,
        storeEmail ,
        storeAddress ,
        storePhone ,
        owner ,
        products
     })
    //   res.json(" Merchant Store Is Created Successfullly Done")
     merchant.save()

    await userList.findOneAndUpdate(
        {_id : owner} ,
        {role : "merchant"} ,
        {new : true}
     )
    res.json(merchant)
}

module.exports = becomeMerchantController