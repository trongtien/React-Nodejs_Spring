const database = require('../../database')

let getAll = async () => {
    let dataCategory = await database.category.findAll()

    return dataCategory
}

module.exports = {
    getAll: getAll,
}