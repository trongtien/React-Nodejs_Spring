const CardModel = require('./../models/card.model')

exports.insert = async (req, res) => {
    try {
        let newOrder = {
            user_id: req.body.user_id,
            content: req.body.content,
            status_order: 1
        }
        let order = await CardModel.createCard(newOrder)
        let arrProduct = req.body.arrProduct
        await CardModel.createDetailCard(order.dataValues.order_id, arrProduct)
        return res.status(200).json({ status: 200, message: "create new order successfull", oder: order.dataValues });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}

exports.list = async (req, res) => {
    try {
        let listOrder = await CardModel.findByUserIdOrder(req.body.user_id, req.body._limit, req.body._page)

        return res.status(200).json({ status: 200, message: "Get list order successfull", data: listOrder });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}

exports.getByIdCard = async (req, res) => {
    try {
        let listCardById = await CardModel.findByUserIdOrderDetail(
            req.params.order_id
        )
        return res.status(200).json({ status: 200, message: "Get list order successfull", data: listCardById });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}