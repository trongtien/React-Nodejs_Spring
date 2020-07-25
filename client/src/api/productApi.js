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
    }
}

export default productApi;
