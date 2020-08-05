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

const getProductById = (product_id, limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let productDetail = []
            if (!product_id) {
                reject(`${transErrors.err_product}`)
            }
            let product = await productModel.findProductById(product_id)
            await productDetail.push(product)
            let category_id = product.category_id
            let productCategory = await productModel.findProductByCategory(category_id, limit, page)
            return resolve({ productDetail, productCategory })
        } catch (error) {
            reject(error)
        }
    })
}

const getProductByCategory = (category_id, limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!category_id) {
                reject(`${transErrors.err_product}`)
            }
            let productCategory = await productModel.findProductByCategory(category_id, limit, page)
            return resolve(productCategory)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    getAllProduct: getAllProduct,
    getProductById: getProductById,
    getProductByCategory: getProductByCategory
}