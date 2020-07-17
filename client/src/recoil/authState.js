import { atom, selector } from "recoil";
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
    default: " "
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
    await localStorage.setItem('fullname', dataUser.fullname)
    await localStorage.setItem('user_id', dataUser.user_id)
    await localStorage.setItem('node_access_token', dataUser.node_access_token)
}

const clearLocalStorageUser = async () => {
    await localStorage.removeItem('fullname');
    await localStorage.removeItem('user_id');
    await localStorage.removeItem('node_access_token');
}

export {
    statusAuthLogin,
    useInfo,
    isLogin,
    localStorageAddUser,
    clearLocalStorageUser
}