import axiosClient from './../contants/axiosClient'

const cardApi = {
    getById: (order_id) => {
        try {
            const url = "/api/card/"
            return axiosClient.get(url, {
                params: {
                    order_id: order_id
                }
            });
        } catch (error) {
            return error
        }
    },
    postCard: (newCard) => {
        try {
            const url = "/api/comment"
            return axiosClient.post(url, newCard);
        } catch (error) {
            return error
        }
    },
}

export default cardApi;
