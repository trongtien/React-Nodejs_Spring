const database = require('../../database')

let amountProduct = async () => {
    return await database.product.findAll({})
}

let getAllPagination = async (limit, page) => {
    let skipPage = page - 1
    return await database.product.findAll({
        where: {
            status_product: 1
        }, limit: limit, offset: skipPage
    })

}

let findProductById = async (product_id) => {
    return await database.product.findOne({
        where: {
            product_id: product_id
        },
    });
}

let findProductByCategory = async (category_id, limit, page) => {
    console.log('model', category_id, limit, page)
    let skipPage = page - 1
    return await database.product.findAll({
        where: {
            category_id: category_id
        },
        limit: limit,
        offset: skipPage
    });
}

let totalProductByCategory = async (category_id) => {
    return await database.product.findAll({
        where: {
            category_id: category_id
        },
    });
}


module.exports = {
    getAllPagination: getAllPagination,
    amountProduct: amountProduct,
    findProductById: findProductById,
    findProductByCategory: findProductByCategory,
    totalProductByCategory: totalProductByCategory
}