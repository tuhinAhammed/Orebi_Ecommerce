const discountShcema = require("../model/discountSchema")

async function createDiscountController(req, res) {
    const {
        cash,
        flat,
        percent,
        category,
        subCategory,
        product
    } = req.body
    const discountList = new discountShcema({
        cash ,
        flat,
        percent,
        category,
        subCategory,
        product
    })
    discountList.save()
    const data = await discountShcema.find({}).populate(["category" , "subCategory" , "product"])
    res.json(data)
}

module.exports = createDiscountController