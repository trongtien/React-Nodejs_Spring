const database = require('../../database')

let getAll = async (limit, page) => {
    console.log(limit, page)
    return await database.product.findAll({ limit: limit, offset: page })
}
module.exports = {
    getAll: getAll
}