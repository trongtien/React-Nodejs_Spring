import axiosClient from './../contants/axiosClient'

const commentApi = {
    getById: (product_id, _limit, _page) => {
        let product = {
            product_id: product_id,
            _limit: _limit,
            _page: _page
        }
        try {
            const url = "/api/comment"
            return axiosClient.get(url, product);
        } catch (error) {
            return error
        }
    },
    postComment: (newComment) => {
        try {
            const url = "/api/comment"
            return axiosClient.post(url, newComment);
        } catch (error) {
            return error
        }
    },
}

export default commentApi;
