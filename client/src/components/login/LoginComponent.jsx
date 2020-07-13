import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "reactstrap";
import { useRecoilState } from "recoil";
import * as Yup from 'yup';
import inputField from '../formik/inputField';
import { statusAuthLogin, useInfo, isLogin, localStorageAddUser } from './../../recoil/auth/authState';
import authApi from "./../../api/authApi"
import "./style.scss";


LoginComponent.prototype = {
  onSubmit: PropTypes.func
};
LoginComponent.defaultProps = {
  onSubmit: null
};

function LoginComponent(props) {
  const [AuthFormLogin, setAuthFormLogin] = useRecoilState(statusAuthLogin);
  const [UserInfo, setUserInfo] = useRecoilState(useInfo);
  const [isLoginUser, setisLoginUser] = useRecoilState(isLogin);

  function hanldeClick() {
    let isCloseLogin = AuthFormLogin
    setAuthFormLogin(!isCloseLogin)
  }

  const login = (values) => {
    authApi.postLogin(values).then(async (data) => {
      if (data) {
        let closeLogin = AuthFormLogin
        await setAuthFormLogin(!closeLogin)
        let updateStatususe = isLoginUser
        await setisLoginUser(!updateStatususe)
        let UserInfo = data
        await setUserInfo(UserInfo)
        localStorageAddUser(UserInfo)
      }
    })

  }

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
            <div>
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
                  // const { values, errors, touched } = formikProps
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

                      <div>
                        <Button type="submit">Đăng Nhập </Button>
                        <Link
                          // to="/register"
                          onClick={() => {
                            hanldeClick();
                          }}
                        >
                          Chưa có tài khoản
                        </Link>
                      </div>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default LoginComponent;
