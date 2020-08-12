const CommentController = require('./controllers/comment.controller')
const ValidationMiddleware = require('./middlewares/comment.validation')

exports.routerConfig = function (app) {
    app.post('/api/comment', [
        ValidationMiddleware.validComment,
        CommentController.insert
    ])

    app.get('/api/comment', [
        ValidationMiddleware.validGetComment,
        CommentController.list
    ])
}