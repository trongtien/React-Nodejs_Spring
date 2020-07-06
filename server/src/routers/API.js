const express = require('express')
const router = express.Router()

const { authController } = require('../controllers/index')

const initAPI = (app) => {
  router.post("/api/auth/resister", authController.resister)

  return app.use('/', router)
}

module.exports = initAPI

