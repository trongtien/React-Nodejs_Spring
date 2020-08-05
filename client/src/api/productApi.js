import axiosClient from './../contants/axiosClient'

const productApi = {
    getAll: (_limit, _page) => {
        try {
            const url = `/api/product/get-all/:_limit/:_page`
            return axiosClient.get(url, {
                params: {
                    _limit: _limit,
                    _page: _page
                }
            })
        } catch (error) {
            return error
        }
    },
    getById: (product_id, _limit, _page) => {
        let product = {
            product_id: product_id,
            _limit: _limit,
            _page: _page
        }
        try {
            const url = "/api/product/get-by-id"
            return axiosClient.post(url, product);
        } catch (error) {
            return error
        }
    }
}

export default productApi;
