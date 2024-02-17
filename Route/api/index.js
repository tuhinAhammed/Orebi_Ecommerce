const express = require("express");
const router  = express.Router();
const category = require("./category")
const merchant = require("./merchant")
const productRouter = require("./product")
const authRouter = require("./authentication");
const authApi = "/authentication"
const categoryApi = "/category"
const merchantApi = "/merchant"
const productUploadApi = "/product"

router.use(authApi , authRouter )
router.use(categoryApi , category)
router.use(merchantApi , merchant )
router.use(productUploadApi , productRouter ) 
module.exports = router