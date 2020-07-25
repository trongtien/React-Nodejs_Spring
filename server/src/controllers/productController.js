const { productService } = require('./../services/index')

let getProduct = async (request, response) => {
    try {
        let limit = parseInt(request.query._limit)
        let page = parseInt(request.query._page)

        let products = await productService.getAllProduct(limit, page)

        return response.status(200).json({ status: 200, message: "create new user successfully", data: products })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}




module.exports = {
    getProduct: getProduct
}