const nodemailer = require('nodemailer');

const option = {
    host: process.env.hostMail,
    port: process.env.portMail,
    secure: true,
    auth: {
        user: process.env.userMail,
        pass: process.env.passwordMail
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
};
let transporter = nodemailer.createTransport(option);

module.exports = {
    transporter: transporter
}
//