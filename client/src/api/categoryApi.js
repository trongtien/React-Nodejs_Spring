import axiosClient from './../contants/axiosClient'

const authAPI = {
    getAll: () => {
        try {
            const url = `/api/category/get-all-category`
            return axiosClient.get(url)
        } catch (error) {
            return error
        }
    },
}

export default authAPI;
