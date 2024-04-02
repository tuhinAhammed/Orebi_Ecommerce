const express = require("express") ;
const registration = require("../../controller/registration");
const {emailVarificationController , verifyUserEmail} = require("../..//controller/emailVarificationController");
const loginController = require("../../controller/loginController");
const router = express.Router() ;

router.post("/registration" , registration) ;
router.post ("/varification" , emailVarificationController)
router.post ("/login" , loginController)
router.get("/uservarification/:demo" , verifyUserEmail)
module.exports = router