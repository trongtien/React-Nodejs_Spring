import { atom } from "recoil";
import Cookies from 'js-cookie';
/*
* status form login
* @params true open form login
*/
const statusAuthLogin = atom({
    key: 'AuthFormLogin',
    default: false
});

const useInfo = atom({
    key: 'UserInfo',
    default: ""
})

const user = atom({
    key: "USER",
    default: {}
})

/*
* status user login
* @params true update view 
*/
const isLogin = atom({
    key: 'isLoginUser',
    default: false
})


const localStorageAddUser = async (UserInfo) => {
    let dataUser = await UserInfo.data
    await Cookies.set('name', dataUser.fullname)
    await Cookies.set('user_id', dataUser.user_id)
    await Cookies.set('node_access_token', dataUser.node_access_token)
}

const clearLocalStorageUser = async () => {
    await Cookies.remove('name')
    await Cookies.remove('user_id')
    await Cookies.remove('node_access_token')
}


export {
    statusAuthLogin,
    useInfo,
    isLogin,
    user,
    localStorageAddUser,
    clearLocalStorageUser
}