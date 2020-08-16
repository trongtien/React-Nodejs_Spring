import axiosClient from './../contants/axiosClient'

const cardApi = {
    getById: (user_id, _limit, _page) => {
        console.log('user_id, _limit, _page', user_id, _limit, _page)
        try {
            const url = "/api/card-new"
            let listCard = {
                user_id: user_id,
                _limit: _limit,
                _page: _page
            }
            return axiosClient.post(url, listCard);
        } catch (error) {
            return error
        }
    },
    postCard: (newCard) => {
        try {
            const url = "/api/card"
            return axiosClient.post(url, newCard);
        } catch (error) {
            return error
        }
    },
    deleteById: (oderId) => {
        console.log('delete card api', oderId)
        try {
            const url = "/api/card-delete"
            let listCard = {
                order_id: oderId
            }
            return axiosClient.post(url, listCard);
        } catch (error) {
            return error
        }
    },
}

export default cardApi;
