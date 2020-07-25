const productModel = require('./../models/productModel')
const { transErrors } = require('../helperts/validateContent')

const getAllProduct = (limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await productModel.getAllPagination(limit, page)
            let allproduct = await productModel.amountProduct()
            let amount = allproduct.length
            if (product && amount) {
                let responseData = {
                    data: product,
                    amount: amount
                }
                return resolve(responseData)
            }
            return reject(`${transErrors.err_product}`)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    getAllProduct: getAllProduct
}