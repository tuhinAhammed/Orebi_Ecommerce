const express = require("express")
const router = express.Router()
const { createCategoryController , statusCategoryController, createSubCategoryController, statusSubCategoryController, getCategory, getSubCategory} = require("../../controller/createCategoryController")


    router.post("/create/category" , createCategoryController)
    router.post("/category/status" , statusCategoryController)
    router.post("/create/subcategory" , createSubCategoryController) 
    router.post ("/subcategory/status" , statusSubCategoryController)
    router.get ("/get/category" , getCategory)
    router.get("/get/subcategory" , getSubCategory)


module.exports = router