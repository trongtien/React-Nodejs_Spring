const database = require('../../database')

let findAll = async (limit, page) => {
    return await database.categpry.findAll({ limit: limit, offset: page })
}

module.exports = {
    findAll: findAll,
}