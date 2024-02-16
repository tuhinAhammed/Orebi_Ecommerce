const express = require("express");
const router  = express.Router();
const category = require("./category")
const merchant = require("./merchant")
const authRouter = require("./authentication");
const authApi = "/authentication"
const categoryApi = "/category"
const merchantApi = "/merchant"

router.use(authApi , authRouter )
router.use(categoryApi , category)
router.use(merchantApi , merchant )
module.exports = router