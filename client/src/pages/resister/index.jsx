import React from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { isLogin, localStorageAddUser, useInfo } from '../../recoil/authState';
import authAPI from './../../api/authApi';
import ResisterForm from './component/resisterForm/ResisterForm';

function Resister(props) {
    const [UserInfo, setUserInfo] = useRecoilState(useInfo);
    const [isLoginUser, setisLoginUser] = useRecoilState(isLogin);

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
