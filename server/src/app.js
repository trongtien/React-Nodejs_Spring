const express = require('express')
const cors = require('cors')
const logger = require('morgan');
const path = require('path')
const dotenv = require('dotenv')
const passport = require('passport')
const app = express()
const { strategy } = require('./helperts/passport')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))
app.use('/public', express.static(path.join(__dirname, 'public')))
passport.use(strategy)
app.use(passport.initialize())
app.use(passport.session())

dotenv.config({ path: './.env' })

const CardRouter = require('./card/router.config')
const CommentRouter = require('./comment/router.config')

const initRouter = require('./routers/API')

CardRouter.routerConfig(app)
CommentRouter.routerConfig(app)

initRouter(app)

module.exports = app
