import React from 'react'
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { Row, Col, Card, Button, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";
import inputField from './../../../../components/formik/inputField';
import * as Yup from 'yup';
import './style.scss'

ResisterForm.propTypes = {
    onSubmit: PropTypes.func
}

ResisterForm.defaultProps = {
    onSubmit: null
}

function ResisterForm(props) {
    const initialValues = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    }
    const validateionSchema = Yup.object().shape({
        fullname: Yup.string().required('This is field is required'),
        username: Yup.string().required('This is field is required'),
        password: Yup.string().required('This is field is required'),
        phone: Yup.number().required('This is field is required'),
        address: Yup.string().required('This is field is required')
    })
    return (
        <div className="form-resister">
            <Row>
                <Col lg='7'>
                    <Card>
                        <div >
                            <h1>Tạo Tài Khoản</h1>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validateionSchema}
                                onSubmit={props.onSubmit}
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
                                                    Đăng Ký
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
export default ResisterForm;