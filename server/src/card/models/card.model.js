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
                    amount: parseInt(arrProduct[i].quantity),
                    price: parseInt(arrProduct[i].price),
                })
            }
            resolve('sucess')
        } catch (error) {
            reject(error)
        }
    });
}

exports.findByUserIdOrder = (user_id, limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let skipPage = parseInt(page) - 1
            let data = await database.order.findAll({
                where: {
                    user_id: parseInt(user_id),
                    status_order: [1, 2]
                },
                limit: parseInt(limit),
                offset: skipPage,
                order: [
                    ['order_id', 'DESC']
                ]
            });
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


exports.findByUserIdOrderDetail = async (order_id) => {
    return await database.orderdetail.findAll({
        where: {
            order_id: parseInt(order_id)
        },
        include: {
            model: database.product,
            as: 'product_name',
        },
        attributes: ['roleId']
    });
}

exports.deletUserIdOrder = async (order_id) => {
    return await database.order.update(
        { status_order: 3 },
        { where: { order_id: order_id } }
    )
}

exports.getOrderDetailt = async (order_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataOrderDetailt
            await database.orderdetail.findAll({
                where: {
                    order_id: parseInt(order_id),
                },
                include: [{
                    model: database.product,
                    require: true
                }]
            }).then(data => {
                dataOrderDetailt = data
            });

            resolve(dataOrderDetailt)
        } catch (error) {
            reject(error)
        }
    });
}
