const express = require("express");
const router  = express.Router();
const authRouter = require("./authentication")
const authApi = "/authentication"

router.use(authApi , authRouter )

module.exports = router