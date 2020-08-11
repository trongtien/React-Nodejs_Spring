const CommentModel = require('./../models/comment.model')

exports.insert = async (req, res) => {
    try {
        let newComment = {
            product_id: parseInt(req.body.product_id),
            user_id: parseInt(req.body.user_id),
            content: req.body.content
        }
        let newData = await CommentModel.createComment(newComment)
        console.log('new data', newData)
        return res.status(200).json({ status: 200, message: "create new commment successfull", data: newData });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}

exports.list = async (req, res) => {
    try {
        let data = await CommentModel.findById(
            parseInt(req.body.product_id),
            parseInt(req.body._limit),
            parseInt(req.body._page)
        )
        return res.status(200).json({ status: 200, message: "get list comment successfull", data: data });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}
