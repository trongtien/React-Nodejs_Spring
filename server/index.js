const http = require('http')
const app = require('./src/app')
const server = http.createServer(app)
const port = process.env.port
const database = require('./database')
const gmail = require('./src/helpert/mail')



database.sequelize.sync().then(() => {
    server.listen(port, err => {
        if (err) throw err
        console.log(`server api connect: http://localhost:${process.env.port}`)
    })
    gmail.transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else { //Nếu thành công.
            console.log('server connect mail successfully!');
        }
    });
})



