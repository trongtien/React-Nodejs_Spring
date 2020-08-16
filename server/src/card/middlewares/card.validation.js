exports.validOrder = (req, res, next) => {
    if (req.body.user_id) {
        return next();
    } else {
        return res.status(400).send({ error: 'need to pass user_id' });
    }
};

exports.validPagination = (req, res, next) => {
    if (req.body._limit && req.body._page) {
        return next();
    } else {
        return res.status(400).send({ error: 'need to pass _litmit or _page' });
    }
};

exports.validGetByIdOrder = (req, res, next) => {
    if (req.params.order_id) {
        return next();
    } else {
        return res.status(400).send({ error: 'need to pass order_id' });
    }
};

exports.validOrderDetailt = (req, res, next) => {
    if (req.body.arrProduct) {
        return next()
    } else {
        return res.status(400).send({ error: 'need to pass data' });
    }
}

exports.validDeleteOrder = (req, res, next) => {
    console.log(req.body.order_id)
    if (req.body.order_id) {
        return next()
    } else {
        return res.status(400).send({ error: 'need to pass data' });
    }
}