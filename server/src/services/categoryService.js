const categoryModel = require('./../models/categoryModel')
const productModel = require('./../models/productModel')
const { transErrors } = require('../helperts/validateContent')

const getCategory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await categoryModel.getAll()
            
            return resolve(category)
        } catch (error) {
            reject(error)
        }
    })
}



module.exports = {
    getCategory: getCategory
}