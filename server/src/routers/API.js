const express = require('express')

const router = express.Router()

const initAPI = (app) => {


  return app.use('/', router)
}

module.exports = initAPI

