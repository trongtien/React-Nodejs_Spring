import { FastField, Form, Formik } from "formik";
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Button, Card, Col, Row } from 'reactstrap';
import { useRecoilState, useSetRecoilState } from "recoil";
import { user } from '../../recoil/authState';
import { content, showAlert, showAlertError, showMessageAlert, showMessageErrorAlert } from '../../recoil/contant.js';
import authAPI from "./../../api/authApi";
import inputField from './../../components/formik/inputField';
import * as Yup from 'yup';
import './style.scss';


function ChangePersional(props) {
    const [userInfo, setUserInfo] = useRecoilState(user);
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);

    useEffect(() => {
        async function getUser() {
            try {
                await getInfo()
            } catch (error) {
                return error.message
            }
        }
        getUser()
    }, [])

    async function getInfo() {
        let user_id = await Cookies.get('user_id')
        if (user_id) {
            await authAPI.getInfoUserById(user_id).then((data) => {
                return setUserInfo(data.data)
            })
        }
    }

    const initialValues = {

        fullname: userInfo.fullname,
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        phone: userInfo.phone,
        address: userInfo.address
    }
    const validateionSchema = Yup.object().shape({
        fullname: Yup.string().required('This is field is required'),
        username: Yup.string().required('This is field is required'),
        password: Yup.string().required('This is field is required'),
        phone: Yup.number().required('This is field is required'),
        address: Yup.string().required('This is field is required')
    })

    const hanldChangePersional = (values) => {
        let persionalUpdate = {
            user_id: userInfo.user_id,
            fullname: values.fullname,
            username: values.username,
            email: values.email,
            password: values.password,
            phone: values.phone,
            address: values.address
        }
        if (persionalUpdate) {
            authAPI.putchangePersional(persionalUpdate).then(async (data) => {
                if (data.status === 200) {
                    showMessageAlert("Cập nhật thông tin thành công", setMsg, setShowMsg, showMsg)
                    props.history.push('/')
                    await getInfo()
                }
            }).catch(async error => {
                if (error) {
                    showMessageErrorAlert("Lỗi vui lòng thử lại", setMsg, setShowMsgErr, showMsgErr)
                    props.history.push('/persional');
                }
            })
        }
    }

    return (
        <div className="form-resister">
            <Row>
                <Col lg='7'>
                    <Card>
                        <div >
                            <h1>Thông Tin Cá Nhân</h1>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validateionSchema}
                                onSubmit={values => hanldChangePersional(values)}
                            >
                                {formikProps => {
                                    return (
                                        <Form className="reister-detail">
                                            <FastField
                                                name="fullname"
                                                component={inputField}
                                                label="FullName"
                                                placeholder="with a placeholder fullname"
                                            />
                                            <FastField
                                                name="username"
                                                component={inputField}
                                                label="Username"
                                                placeholder="with a placeholder username"
                                            />
                                            <FastField
                                                name="email"
                                                component={inputField}
                                                label="Email"
                                                type="email"
                                                placeholder="with a placeholder email"
                                            />
                                            <FastField
                                                name="password"
                                                component={inputField}
                                                label="Password"
                                                type="password"
                                                placeholder="with a placeholder password"
                                            />
                                            <FastField
                                                name="phone"
                                                component={inputField}
                                                label="Số diện thoại"
                                                placeholder="with a placeholder phone"
                                            />
                                            <FastField
                                                name="address"
                                                component={inputField}
                                                label="Địa chỉ"
                                                placeholder="with a placeholder address"
                                            />

                                            <div >
                                                <Button >
                                                    Cập Nhật Thông tin
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
export default withRouter(ChangePersional);