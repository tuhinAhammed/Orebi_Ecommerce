const express = require("express");
const router = express.Router()
const category = require("./category")
const merchant = require("./merchant")
const productRouter = require("./product")
const authenticatin = require("./authentication");
const discountRouter = require("./discount")
const authApi = "/authentication"
const categoryApi = "/category"
const merchantApi = "/merchant"
const productUploadApi = "/product"
const discountApi = "/discount"

router.use(authApi , authenticatin )
router.use(categoryApi , category)
router.use(merchantApi , merchant )
router.use(productUploadApi , productRouter ) 
router.use(discountApi , discountRouter)
module.exports = router