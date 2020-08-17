const database = require('../../../database')

exports.createComment = (newComment) => {
    return database.comment.create(newComment)
}

exports.findById = async (product_id, limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let skipPage = parseInt(page) - 1
            let data = await database.comment.findAll({
                where: {
                    product_id: parseInt(product_id),
                },
                limit: parseInt(limit),
                offset: skipPage,
                order: [
                    ['comment_id', 'DESC']
                ],
            })

            // let data = await database.comment.findAll({
            //     where: {
            //         product_id: parseInt(product_id)
            //     },
            //     include: [{
            //         model: user,
            //         through: {
            //             attributes: ["user_id", "user_id"]
            //         }
            //     }]
            // })

            let totalComment = data.length

            resolve({ data, totalComment })
        } catch (error) {
            reject(error)
        }
    });
}
