const jwt = require('jsonwebtoken')

let generateToken = (user, secretSignature) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
        const userData = {
            _id: user._id,
            user_id: user.user_id,
            full_name: user.full_name,
            username: user.username,
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: userData },
            secretSignature,
            {
                algorithm: 'HS256',
                // expiresIn: tokenLife
            },
            (error, token) => {
                if (error) {
                    return reject(error)
                }
                resolve(token)
            })
    })
}

let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error)
            }
            resolve(decoded)
        })
    })
}

module.exports = {
    generateToken: generateToken,
    verifyToken: verifyToken
}
