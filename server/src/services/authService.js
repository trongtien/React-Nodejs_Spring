const bcrypt = require('bcrypt')
const uuid = require("uuid");
// const passport = require('passport')
const jwt = require("jsonwebtoken")
const { checkPassword } = require('./../helperts/commant')
const { transErrors } = require('../helperts/validateContent')
const { transporter } = require('./../helperts/mail')
const userModel = require('../models/userModel');
const { jwtOptions } = require('./../helperts/passport')

const createNewUser = (fullname, username, password, email, phone, address) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!fullname || !username || !password || !phone || !address) {
                return reject(transErrors.validate_form)
            }
            let checkUser = await userModel.findUser(username)
            if (checkUser) {
                return reject(`${transErrors.account_username_user}`)
            }
            if (email) {
                let checkEmail = await userModel.findUserMail(email)
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
            let createUser = await userModel.create(infoUser)
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

const checkLogin = (username, password) => {

    return new Promise(async (resolve, reject) => {
        try {
            if (!username) {
                return reject(`${transErrors.username_user}`)
            }
            if (!password) {
                return reject(`${transErrors.password_user}`)
            }
            let userInfo = await userModel.findUser(username);

            if (!userInfo) {
                return reject(`${transErrors.err_check_username}`)
            }
            let check = checkPassword(password, userInfo.dataValues.password)

            if (check) {
                let node_access_token = jwt.sign(userInfo.dataValues.user_id, jwtOptions.secretOrKey);
                let payload = {
                    user_id: userInfo.dataValues.user_id,
                    fullname: userInfo.dataValues.fullname,
                    node_access_token: node_access_token
                }
                return resolve(payload);
            } else {
                return reject({ msg: `${transErrors.err_check_pasword}` });
            }
        } catch (error) {
            return reject(error)
        }
    })
}

const updateInfoUser = (user_id, fullname, email, phone, address) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (user_id) {
                let user = await user.findUserId(user_id)
                if (!fullname)
                    fullname = user.fullname
                if (!email)
                    email = user.email
                if (!phone)
                    phone = user.phone
                if (!addresse)
                    address = user.address
                let newInfo = {
                    fullname: fullname.trim(),
                    username: user.username,
                    passport: user.passport,
                    email: email.trim(),
                    phone: phone.trim(),
                    address: address.trim()
                }
                let newInfoUser = await userModel.updateInfo(user_id, newInfo)
                return resolve(newInfoUser)
            }
            return reject(`${transErrors.err_product}`)
        } catch (error) {
            reject(error)
        }
    })
}

const updatePasswordUser = (user_id, password, passwordNew) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!user_id) {
                return reject(`${transErrors.err_product}`)
            }
            let user = await userModel.findUserId(user_id)
            let statusCheck = checkPassword(password, user.dataValues.password)
            if (statusCheck) {
                let hashPasswordNew = bcrypt.hashSync(passwordNew.trim(), 10)
                let newPassword = await userModel.updatePassword(user_id, hashPasswordNew)
                return resolve(newPassword)
            }
            return reject(`${transErrors.err_product}`)
        } catch (error) {
            reject(error)
        }
    })
}

const getInfoUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!user_id) {
                return reject(`${transErrors.err_product}`)
            }
            let user = await userModel.findUserId(user_id)
            if (user) {
                return resolve(user)
            }
            return reject(`${transErrors.err_product}`)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    createNewUser: createNewUser,
    checkLogin: checkLogin,
    updateInfoUser: updateInfoUser,
    updatePasswordUser: updatePasswordUser,
    getInfoUser: getInfoUser
}
