const { authServices } = require('../services/index')


let resister = async (request, response) => {
    try {
        let fullname = request.body.fullname
        let username = request.body.username
        let password = request.body.password
        let email = request.body.email
        let phone = request.body.phone
        let address = request.body.address
        let createNewUser = await authServices.createNewUser(fullname, username, password, email, phone, address)
        return response.status(200).json({ status: 200, message: "create new user successfully", data: createNewUser })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }

}

let login = async (request, response) => {
    try {
        let username = request.body.username
        let password = request.body.password

        let infoUserLogin = await authServices.checkLogin(username, password)
        return response.status(200).json({ status: 200, message: "login successfully", data: infoUserLogin })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}

let updateInfo = async (request, response) => {
    try {
        let user_id = request.body.user_id
        let fullname = request.body.fullname
        let email = request.body.email
        let phone = request.body.phone
        let address = request.body.address
        let updateInfo = await authServices.updateInfoUser(user_id, fullname, email, phone, address)
        return response.status(200).json({ status: 200, message: "update succesfully", data: updateInfo })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}

let updatePassword = async (request, response) => {
    try {
        let user_id = request.body.user_id
        let password = request.body.password
        let passwordNew = request.body.passwordNew
        console.log('user_id', user_id)
        console.log('password', password)
        console.log('passwordNew', passwordNew)
        let updatePassword = await authServices.updatePasswordUser(user_id, password, passwordNew)
        console.log('updatePassword', updatePassword)
        return response.status(200).json({ status: 200, message: 'update successfully', data: updatePassword })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}

let getUser = async (request, response) => {
    try {
        // console.log('[body]', request.body)
        // let user_id = request.body.user_id
        let user_id = request.query.user_id
        console.log('[user_id]', user_id)


        let user = await authServices.getInfoUser(user_id)
        return response.status(200).json({ status: 200, message: 'get info user successfully', data: user })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}
module.exports = {
    resister: resister,
    login: login,
    updateInfo: updateInfo,
    updatePassword: updatePassword,
    getUser: getUser
}
