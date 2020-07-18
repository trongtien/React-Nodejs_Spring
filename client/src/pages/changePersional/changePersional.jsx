import { FastField, Form, Formik } from "formik";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Button, Card, Col, Row, Spinner } from 'reactstrap';
import authAPI from "./../../api/authApi";
import inputField from './../../components/formik/inputField';
// import * as Yup from 'yup';
import './style.scss';


function ChangePersional(props) {
    const [infoUser, setInfoUser] = useState({})

    useEffect(() => {
        getUser()
    }, []);
    const getUser = () => {
        // let user_id = JSON.stringify(Cookies.get('user_id'))
        let user_id = Cookies.get('user_id')
        console.log(user_id)
        if (user_id) {
            authAPI.getInfoUserById(user_id).then(data => {
                setInfoUser(data)
            })
        }
    }
    console.log('[info user]', infoUser)

    const initialValues = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    }
    // const validateionSchema = Yup.object().shape({
    //     password: Yup.string().required('Bạn chưa nhập thông tin'),
    //     newpassword: Yup.string().required('Bạn chưa nhập thông tin'),
    //     isnewpassword: Yup.string().required('Bạn chưa nhập thông tin')
    // })

    const hanldChangePersional = (values) => {
        console.log(values)
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
                                // validationSchema={validateionSchema}
                                onSubmit={values => hanldChangePersional(values)}
                            >
                                {formikProps => {
                                    const { isSubmitting } = formikProps
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
                                                <Button>
                                                    Cập Nhật Thông tin
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
export default withRouter(ChangePersional);