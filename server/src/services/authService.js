const bcrypt = require('bcrypt')
const uuid = require("uuid");
const { transErrors } = require('../helpert/validateContent')
const { transporter } = require('../helpert/mail')
const user = require('../models/userModel')

const createNewUser = (fullname, username, password, email, phone, address) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!fullname || !username || !password || !phone || !address) {
                return reject(transErrors.validate_form)
            }
            let checkUser = await user.findUser(username)
            if (checkUser) {
                return reject(`${transErrors.account_username_user}`)
            }
            if (email) {
                let checkEmail = await user.findUserMail(email)
                if (checkEmail) {
                    return reject(`${transErrors.account_email_user}`)
                }
            }
            let infoUser = {
                user_id: uuid.v4(),
                level: process.env.BrandUser,
                fullname: fullname.trim(),
                username: username.toLowerCase().trim(),
                password: bcrypt.hashSync(password.trim(), 10),
                email: email.toLowerCase().trim(),
                phone: phone.trim(),
                address: address.trim()
            }
            let createUser = await user.create(infoUser)
            if (email) {
                let mailOptions = {
                    from: 'FRUIT SHOP',
                    to: email,
                    subject: 'Fruil Shop xin chào',
                    text: 'Bạn đã đăng ký thành công chào mừng bạn đến với fruit shop',
                    // html: content 
                }
                transporter.sendMail(mailOptions, (error) => {
                    if (error) {
                        console.log(error);
                    }
                })
            }
            resolve(createUser)
        } catch (error) {
            reject(error)
        }
    })
}

const login = () => {
    return new Promise((resolve, reject) => {
        try {

        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUser: createNewUser
}