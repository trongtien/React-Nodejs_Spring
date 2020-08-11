const database = require('../../../database')


exports.createCard = (newCard) => {
    return database.order.create(newCard)
}

exports.createDetailCard = async (order_id, arrProduct) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < arrProduct.length; i++) {
                await database.orderdetail.create({
                    order_id: parseInt(order_id),
                    product_id: parseInt(arrProduct[i].product_id),
                    amount: parseInt(arrProduct[i].amount),
                    price: parseInt(arrProduct[i].price),
                    product_name: arrProduct[i].product_name
                })
            }
            resolve('sucess')
        } catch (error) {
            reject(error)
        }
    });
}

exports.findByUserIdOrder = async (user_id, limit, page) => {
    let skipPage = parseInt(page) - 1
    return await database.order.findAll({
        where: {
            user_id: parseInt(user_id)
        },
        limit: parseInt(limit),
        offset: skipPage,
        order: [
            ['order_id', 'DESC']
        ]
    });
}

exports.findByUserIdOrderDetail = async (order_id) => {
    return await database.orderdetail.findAll({
        where: {
            order_id: parseInt(order_id)
        },
    });
}