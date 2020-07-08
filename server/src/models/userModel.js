const database = require('../../database')

let findAll = async () => {
    return await database.user.findAll().then(data => {
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
let findUserId = async (user_id) => {
    return await database.user.findOne({
        where: {
            user_id: user_id
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
let updateInfo = async (user_id, newInfo) => {
    return await database.user.update(
        newInfo, { where: { user_id: user_id } }
    )
}
let updatePassword = async (user_id, password) => {
    return await database.user.update(
        { password: password }, { where: { user_id: user_id } }
    )
}

module.exports = {
    findAll: findAll,
    create: create,
    findUser: findUser,
    findUserMail: findUserMail,
    findUserId: findUserId,
    updateInfo: updateInfo,
    updatePassword: updatePassword
}