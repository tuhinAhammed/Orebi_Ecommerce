const express = require("express")
const {createProductSecurity , createProduct } = require("../../controller/productController")
const router = express.Router()

router.post("/create/product"  , createProductSecurity , createProduct)

module.exports = router