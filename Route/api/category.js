const express = require("express")
const router = express.Router()
const { createCategoryController , statusCategoryController, createSubCategoryController} = require("../../controller/createCategoryController")


    router.post("/createcategory" , createCategoryController)
    router.post("/categorystatus" , statusCategoryController)
    router.post("/create/subcategory" , createSubCategoryController) 


module.exports = router