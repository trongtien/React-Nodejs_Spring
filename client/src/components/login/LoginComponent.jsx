import { FastField, Form, Formik } from "formik";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, CardBody, Col, Row, Spinner } from "reactstrap";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Yup from 'yup';
import { isLogin, localStorageAddUser, statusAuthLogin, useInfo } from '../../recoil/authState';
import { content, showAlert, showMessageAlert, showAlertError, showMessageErrorAlert } from '../../recoil/contant.js';
import inputField from '../formik/inputField';
import authApi from "./../../api/authApi";
import "./style.scss";


function LoginComponent(props) {
  const [AuthFormLogin, setAuthFormLogin] = useRecoilState(statusAuthLogin);
  const setUserInfo = useSetRecoilState(useInfo);
  const [isLoginUser, setisLoginUser] = useRecoilState(isLogin);
  const [showMsg, setShowMsg] = useRecoilState(showAlert);
  const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
  const setMsg = useSetRecoilState(content);

  function hanldeClick() {
    let isCloseLogin = AuthFormLogin
    setAuthFormLogin(!isCloseLogin)
  }

  const login = (values) => {
    authApi.postLogin(values).then(async (data) => {
      let url = Object.assign(props.location)
      if (data) {
        /*
        * update status form login
        */
        let closeLogin = AuthFormLogin
        await setAuthFormLogin(!closeLogin)
        /*
        * update status login user
        */
        let updateStatususe = isLoginUser
        await setisLoginUser(!updateStatususe)
        // update data userInfo
        let UserInfo = data
        await setUserInfo(UserInfo)
        localStorageAddUser(UserInfo)
        /*
        * show alert
        */
        showMessageAlert("Đăng nhập thành công", setMsg, setShowMsg, showMsg)
        if (url.pathname === '/register') {
          props.history.push('/')
        }
      }
    }).catch(async error => {
      if (error) {
        showMessageErrorAlert("Đăng nhập thất bại Tài khoản hoặc mật khẩu sai", setMsg, setShowMsgErr, showMsgErr)
        let closeLogin = AuthFormLogin
        await setAuthFormLogin(!closeLogin)
        await setAuthFormLogin(closeLogin)
      }
    })
  }

  /*
  * init state data null 
  */
  const initialValues = {
    username: '',
    password: ''
  }
  const validateionSchema = Yup.object().shape({
    username: Yup.string().required('This is field is required'),
    password: Yup.string().required('This is field is required')
  })

  return (
    <div className="form-login">
      <Row>
        <Col lg="7">
          <Card>
            <CardBody>
              <div className="login-title">
                <h1>Login</h1>
                <p onClick={() => { hanldeClick(); }} > x</p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validateionSchema}
                onSubmit={values => login(values)}
              >
                {formikProps => {
                  // const { values, errors, touched, isSubmitting }
                  const { isSubmitting } = formikProps
                  return (
                    <Form>
                      <FastField
                        name="username"
                        component={inputField}
                        label="username"
                        placeholder="with a placeholder username"
                      />

                      <FastField
                        name="password"
                        component={inputField}
                        type="password"
                        label="password"
                        placeholder="with a placeholder password"
                      />

                      <CardBody>
                        <Button type="submit">
                          Đăng Nhập
                          {isSubmitting && <Spinner size="sm" />}
                        </Button>
                        <Link
                          to="/register"
                          onClick={() => {
                            hanldeClick();
                          }}
                        >
                          Chưa có tài khoản
                        </Link>
                      </CardBody>
                    </Form>
                  )
                }}
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default withRouter(LoginComponent);
