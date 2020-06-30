const Sequelize = require('sequelize')

const config = {
    username: process.env.DatabaseUser,
    password: process.env.DatabasePassword,
    database: process.env.DatabaseName,
    host: process.env.DatabaseHost,
    dialect: process.env.Database
}

const sequelize = new Sequelize(config)

module.exports = sequelize