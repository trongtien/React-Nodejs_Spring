const categoryModel = require('./../models/categoryModel')
const { transErrors } = require('../helperts/validateContent')

const getAllCategory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await categoryModel.getAllCategory()
            if (error.length > 0) {
                return reject(error.message)
            }
            return resolve(product)
        } catch (error) {
            reject(error)
        }
    })
}



module.exports = {
    getAllCategory: getAllCategory
}