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
    },
    postchangePassword: (newPassword) => {
        try {
            const url = "/api/auth/update-password"
            return axiosClient.post(url, newPassword)
        } catch (error) {
            return error
        }
    },
    getInfoUserById: (user_id) => {
        try {
            const url = "/api/auth/get-user-byId"
            return axiosClient.get(url, user_id)
        } catch (error) {
            return error
        }
    }

}

export default authAPI;
