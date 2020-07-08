const bcrypt = require('bcrypt')
const uuid = require("uuid");
const { transErrors } = require('../helperts/validateContent')
const { transporter } = require('../helperts/mail')
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

const checkLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        try {
            if (!username) {
                return reject(`${transErrors.username_user}`)
            }
            if (!password) {
                return reject(`${transErrors.password_user}`)
            }
            return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
                if (err) {
                    return next(err);
                }
                if (passportUser) {
                    const user = passportUser;
                    user.token = passportUser.generateJWT();
                    return resolve({ user: user.toAuthJSON() });
                }
                return status(400).info;
            })(req, res, next);
        } catch (error) {
            reject(error)
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
                    fullname: fullname,
                    username: user.username,
                    passport: user.passport,
                    email: email,
                    phone: phone,
                    address: address
                }
                let newInfoUser = await user.updateInfo(user_id, newInfo)
                return resolve(newInfoUser)
            }
            return reject(`${transErrors.err_product}`)
        } catch (error) {
            reject(error)
        }
    })
}

const updatePasswordUser = (user_id, password, passwordNew) => {
    return new Promise((resolve, reject) => {
        try {
            if (!user_id) {
                return reject(`${transErrors.err_product}`)
            }
            let user = await user.findUserId(user_id)
            let statusCheck = bcrypt.compareSync(password, user.password)
            if (statusCheck) {
                let hashPasswordNew = bcrypt.hashSync(passwordNew.trim(), 10)
                let newPassword = await user.updatePassword(hashPasswordNew)
                return resolve(newPassword)
            }
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    createNewUser: createNewUser,
    checkLogin: checkLogin,
    updateInfoUser: updateInfoUser,
    updatePasswordUser: updatePasswordUser
}