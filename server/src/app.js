const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use(passport.session())
dotenv.config({path: './.env' })

const initRouter = require('./routers/API')
const sequelize = require('./config/sequelize')

initRouter(app)
sequelize.authenticate()
    .then(()=>{
        console.log('Connection database orm sequelize successfully')
    })
    .catch(err=>{
        console.error('Connection database orm sequelize fell', err)
    })

module.exports = app