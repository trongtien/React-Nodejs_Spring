const database = require('../../database')

let amountProduct = async () => {
    return await database.product.findAll({})
}

let getAllPagination = async (limit, page) => {
    return await database.product.findAll({ limit: limit, offset: page })
}

let findProductById = async (product_id) => {
    return await database.product.findOne({
        where: {
            product_id: product_id
        },
    });
}

module.exports = {
    getAllPagination: getAllPagination,
    amountProduct: amountProduct,
    findProductById: findProductById
}