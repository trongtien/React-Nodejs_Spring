const express = require('express')
const cors = require('cors')
const logger = require('morgan');
const path = require('path')
const dotenv = require('dotenv')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt');
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use(passport.session())
dotenv.config({ path: './.env' })

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};

const initRouter = require('./routers/API')
// const sequelize = require('./config/sequelize')



initRouter(app)
// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection database orm sequelize successfully')
//     })
//     .catch(err => {
//         console.error('Connection database orm sequelize fell', err)
//     })


module.exports = app