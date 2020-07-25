import React from 'react'
import { FastField, Form, Formik } from "formik";
import { Row, Col, Card, Button, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";
import inputField from './../../components/formik/inputField';
import authApi from "./../../api/authApi";
import * as Yup from 'yup';
import './style.scss'
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import { content, showAlert, showAlertError } from '../../recoil/contant.js';
import { useRecoilState, useSetRecoilState } from "recoil";

function ChangePassword(props) {
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);
    const initialValues = {
        passworrd: "",
        newpassword: "",
        isnewpassword: ""
    }
    const validateionSchema = Yup.object().shape({
        password: Yup.string().required('Bạn chưa nhập thông tin').min(5, "Password must contain at least 8 characters"),
        newpassword: Yup.string().required('Bạn chưa nhập thông tin').min(5, "Password must contain at least 8 characters"),
        isnewpassword: Yup.string().required('Bạn chưa nhập thông tin').when('newpassword', (newpassword, schema) => {
            if (newpassword) return schema.required('Confirm Password is required');
        }).oneOf([Yup.ref('newpassword')], 'Passwords must match')
    })

    const hanldChangePassword = (values) => {
        let user_id = Cookies.get('user_id')
        if (values && user_id) {
            if (values.newpassword === values.isnewpassword) {
                let newPassword = {
                    user_id: user_id,
                    password: values.password,
                    passwordNew: values.isnewpassword
                }
                authApi.putchangePassword(newPassword).then(async (data) => {
                    console.log('data check password', data)
                    if (data.status === 200) {
                        props.history.push('/');
                    }
                    if (data.status === 400) {
                        setShowMsgErr("Mật khẩu không đúng vui lòng thử lại", setMsg, setShowMsgErr, showMsgErr)
                        props.history.push('/changepassword')
                    }
                }).catch(error => {
                    if (error) {
                        setShowMsgErr("Có lõi mời thử lại", setMsg, setShowMsgErr, showMsgErr)
                        props.history.push('/changepassword')
                    }
                })
            }

        }
    }
    return (
        <div className="form-resister">
            <Row>
                <Col lg='7'>
                    <Card>
                        <div >
                            <h1>Thay Đổi Mật Khẩu </h1>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validateionSchema}
                                onSubmit={values => hanldChangePassword(values)}
                            >
                                {formikProps => {
                                    const { isSubmitting } = formikProps
                                    return (
                                        <Form className="reister-detail">
                                            <FastField
                                                name="password"
                                                component={inputField}
                                                label="Password"
                                                type="password"
                                                placeholder="Nhập mật khẩu cũ"
                                            />
                                            <FastField
                                                name="newpassword"
                                                component={inputField}
                                                label="Password Mới"
                                                type="password"
                                                placeholder="Nhập password mới"
                                            />
                                            <FastField
                                                name="isnewpassword"
                                                component={inputField}
                                                label="Nhập lại password mới"
                                                type="password"
                                                placeholder="Nhập lại pasword mới"
                                            />

                                            <div >
                                                <Button>
                                                    Thay đổi mật khẩu
                                                    {isSubmitting && <Spinner size="sm" />}

                                                </Button>
                                                <Link to="/">Trở về cửa hàng</Link>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div >
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default withRouter(ChangePassword);