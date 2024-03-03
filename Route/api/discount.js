const express = require("express")
const createDiscountController = require("../../controller/discountController")
const router = express.Router()

router.post("/creatediscount" ,  createDiscountController)

module.exports = router