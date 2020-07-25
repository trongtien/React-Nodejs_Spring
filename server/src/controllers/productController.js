const { productService } = require('./../services/index')
const product = require('../../database/product')



let getProduct = async (request, response) => {
    try {
        let limit = request.body.limit
        let page = request.body.page

        let products = await productService.getAllProduct(limit, page)
        console.log('[product service]', product)
        return response.status(200).json({ status: 200, message: "create new user successfully", data: products })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}




module.exports = {
    getProduct: getProduct
}