const express = require("express")
const becomeMerchantController = require("../../controller/merchantController")
const router = express.Router()

router.post("/become/merchant" , becomeMerchantController )


module.exports = router