const database = require('../../database')

let findAll = async (limit, page) => {
    return await database.categpry.findAll()
}

module.exports = {
    findAll: findAll,
}