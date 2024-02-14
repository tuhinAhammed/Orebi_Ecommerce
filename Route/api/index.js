const express = require("express");
const router  = express.Router();
const category = require("./category")
const authRouter = require("./authentication");
const authApi = "/authentication"
const categoryApi = "/category"

router.use(authApi , authRouter )
router.use(categoryApi , category)
module.exports = router