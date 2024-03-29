const express = require("express")
const {becomeMerchantController , getAllStore} = require("../../controller/merchantController")
const router = express.Router()

router.post("/become/merchant" , becomeMerchantController )
router.get("/getallstore" , getAllStore )


module.exports = router