exports.validComment = (req, res, next) => {
    if (req.body.product_id && req.body.user_id && req.body.content) {
        return next();
    } else {
        return res.status(400).send({ error: 'need to pass product_id, user_id, content' });
    }
};

exports.validGetComment = (req, res, next) => {
    if (req.body.product_id) {
        return next();
    } else {
        return res.status(400).send({ error: 'need to pass product_id' });
    }
};