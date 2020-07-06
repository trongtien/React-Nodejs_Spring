const database = require('../../database')

let findAll = () => {
    return database.user.findAll().then(data => {
        console.log('[data]', data)
    })
}

let create = async (infoUser) => {
    return await database.user.create(infoUser)
}

let findUser = async (username) => {
    return await database.user.findOne({
        where: {
            username: username,
        },
    });
}
let findUserMail = async (email) => {
    return await database.user.findOne({
        where: {
            email: email,
        },
    });
}


module.exports = {
    findAll: findAll,
    create: create,
    findUser: findUser,
    findUserMail: findUserMail
}