const CardController = require('./controllers/card.controller')
const ValidationMiddleware = require('./middlewares/card.validation')

exports.routerConfig = function (app) {
    app.post('/api/card', [
        ValidationMiddleware.validOrder,
        ValidationMiddleware.validOrderDetailt,
        CardController.insert
    ])
    app.post('/api/card-new', [
        ValidationMiddleware.validOrder,
        ValidationMiddleware.validPagination,
        CardController.list
    ])
    app.get('/api/card/:order_id', [
        ValidationMiddleware.validGetByIdOrder,
        CardController.getByIdCard
    ])
    app.post('/api/card-delete', [
        ValidationMiddleware.validDeleteOrder,
        CardController.delete
    ])
    app.post('/api/get-orderDetail', [
        CardController.getOrderById
    ])
}