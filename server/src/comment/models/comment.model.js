const database = require('../../../database');
exports.createComment = (newComment) => {
    return database.comment.create(newComment)
}

exports.findById = async (product_id, limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let skipPage = parseInt(page) - 1
            let dataComment
            await database.comment.findAll({
                where: {
                    product_id: parseInt(product_id),
                },
                include: [{
                    model: database.user,
                    require: true
                }],
                limit: parseInt(limit),
                offset: skipPage,
                order: [
                    ['comment_id', 'DESC']
                ],

            }).then(data => {
                dataComment = data
            });

            let totalComment = dataComment.length

            resolve({ dataComment, totalComment })
        } catch (error) {
            reject(error)
        }
    });
}
