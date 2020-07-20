import React from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLogin, localStorageAddUser, useInfo } from '../../recoil/authState';
import { content, showAlert, showMessageAlert } from '../../recoil/contant.js';
import authAPI from './../../api/authApi';
import ResisterForm from './component/resisterForm/ResisterForm';

function Resister(props) {
    const setUserInfo = useSetRecoilState(useInfo);
    const [isLoginUser, setisLoginUser] = useRecoilState(isLogin);
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const setMsg = useSetRecoilState(content);

    const handleSubmitResister = (values) => {
        authAPI.postResister(values).then(async (response) => {
            if (response) {
                /*
                * update status login user
                */
                let updateStatususe = isLoginUser
                await setisLoginUser(!updateStatususe)
                // update data userInfo
                let UserInfo = response
                await setUserInfo(UserInfo)
                localStorageAddUser(UserInfo)
                props.history.push('/');
                showMessageAlert("Đăng ký thành công", setMsg, setShowMsg, showMsg)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <ResisterForm
            onSubmit={handleSubmitResister}
        />
    );
}

export default withRouter(Resister);
