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

let getProductById = async (request, response) => {
    try {
        let product_id = request.body.product_id
        let limit = parseInt(request.body._limit)
        let page = parseInt(request.body._page)

        let data = await productService.getProductById(product_id, limit, page)
        console.log("data", data)
        return response.status(200).json({ status: 200, message: "Get product successfull", data: data })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error.message })
    }
}

let getProductByCategory = async (request, response) => {
    try {
        let category_id = request.body.category_id
        let limit = parseInt(request.body._limit)
        let page = parseInt(request.body._page)
        // console.log(category_id, limit, page)
        let data = await productService.getProductByCategory(category_id, limit, page)

        return response.status(200).json({ status: 200, message: "Get product successfull", data: data })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error.message })
    }
}

let getCountProductCategory = async (request, response) => {
    try {
        let category_id = request.body.category_id
        // console.log('category_id', category_id)
        let data = await productService.getProductByCategory(category_id)

        // console.log('data', data)

        return response.status(200).json({ status: 200, message: "Get product successfull", data: data })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error.message })
    }
}

module.exports = {
    getProduct: getProduct,
    getProductById: getProductById,
    getProductByCategory: getProductByCategory,
    getCountProductCategory: getCountProductCategory
}