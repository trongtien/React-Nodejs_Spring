const database = require('../../database')

let getAll = async () => {
    let dataCategory = await database.category.findAll({
        where: {
            status: 1,
        },
    })

    return dataCategory
}

module.exports = {
    getAll: getAll,
}