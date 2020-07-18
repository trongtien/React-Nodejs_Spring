const express = require('express')
const router = express.Router()

const { authController } = require('../controllers/index')

const initAPI = (app) => {

  router.post("/api/auth/login", authController.login)
  router.post("/api/auth/resister", authController.resister)


  router.get("/api/auth/get-user-byId", authController.getUser)
  router.post("/api/auth/update-info", authController.updateInfo)
  router.post("/api/auth/update-password", authController.updatePassword)
  return app.use('/', router)
}

module.exports = initAPI

