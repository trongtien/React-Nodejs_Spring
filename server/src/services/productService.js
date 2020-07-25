const productModel = require('./../models/productModel')
const { transErrors } = require('../helperts/validateContent')

const getAllProduct = (limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await productModel.getAll(limit, page)
            if (product) {
                return resolve(product)
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