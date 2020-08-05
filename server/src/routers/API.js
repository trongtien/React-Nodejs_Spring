const express = require('express')
const router = express.Router()

const { authController, productController } = require('../controllers/index')

const initAPI = (app) => {

  router.post("/api/auth/login", authController.login)
  router.post("/api/auth/resister", authController.resister)
  router.get("/api/product/get-all/:_limit/:_page", productController.getProduct)
  router.post("/api/product/get-by-id", productController.getProductById)
  router.post("/api/product/get-by-category", productController.getProductByCategory)

  router.get("/api/auth/get-user-byId", authController.getUser)
  router.put("/api/auth/update-info", authController.updateInfo)
  router.put("/api/auth/update-password", authController.updatePassword)

  return app.use('/', router)
}
module.exports = initAPI

