const database = require('../../database')

let amountProduct = async () => {
    return await database.product.findAll({})
}

let getAllPagination = async (limit, page) => {
    return await database.product.findAll({ limit: limit, offset: page })
}
module.exports = {
    getAllPagination: getAllPagination,
    amountProduct: amountProduct
}