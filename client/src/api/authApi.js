import axiosClient from './../contants/axiosClient'

const authAPI = {
    postLogin: (userInfo) => {
        try {
            const url = "/api/auth/login"
            return axiosClient.post(url, userInfo);
        } catch (error) {
            return error
        }
    },
    postResister: (newUserInfo) => {
        try {
            const url = "/api/auth/resister"
            return axiosClient.post(url, newUserInfo)
        } catch (error) {
            return error
        }
    }
}

export default authAPI;
