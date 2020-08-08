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
    },
    getTotalPageProductCategory: (product_id) => {
        try {
            const url = `/api/product/count-product-by-category`
            return axiosClient.get(url, product_id)
        } catch (error) {
            return error
        }
    },

    getProductByCategory: (category_id, _limit, _page) => {

        let product = {
            category_id: category_id,
            _limit: _limit,
            _page: _page
        }
        console.log('product', product)
        try {
            const url = `/api/product/get-by-category`
            return axiosClient.post(url, product);
        } catch (error) {
            return error
        }
    }
}

export default productApi;
