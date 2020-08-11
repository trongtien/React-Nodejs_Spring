const CardController = require('./controllers/card.controller')
const ValidationMiddleware = require('./middlewares/card.validation')

exports.routerConfig = function (app) {
    app.post('/api/card', [
        ValidationMiddleware.validOrder,
        ValidationMiddleware.validOrderDetailt,
        CardController.insert
    ])
    app.get('/api/card', [
        ValidationMiddleware.validOrder,
        ValidationMiddleware.validPagination,
        CardController.list
    ])
    app.get('/api/card/:order_id', [
        ValidationMiddleware.validGetByIdOrder,
        CardController.getByIdCard
    ])
}