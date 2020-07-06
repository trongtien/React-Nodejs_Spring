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

}


module.exports = {
    resister: resister,
    login: login
}