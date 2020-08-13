import React from 'react';
import { FastField, Form, Formik } from "formik";
import { withRouter, Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { Button, Card, Col, Row } from 'reactstrap';
import { useRecoilState, useSetRecoilState } from "recoil";
import authAPI from "./../../../../api/authApi";
import cardAPI from "./../../../../api/cardApi"
import { user } from '../../../../recoil/authState';
import { content, showAlert, showAlertError, showMessageAlert, showMessageErrorAlert } from '../../../../recoil/contant.js';
import inputField from './../../../../components/formik/inputField';
import { cardState } from '../../../../recoil/card.js';

import './style.scss';


function FormInfo(props) {
    const [userInfo, setUserInfo] = useRecoilState(user);
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setCard = useSetRecoilState(cardState)
    const setMsg = useSetRecoilState(content);

    React.useEffect(() => {
        async function getUser() {
            try {
                // await getInfo()
                let user_id = await Cookies.get('user_id')
                if (user_id) {
                    await authAPI.getInfoUserById(user_id).then(async (data) => {
                        return await setUserInfo(data.data)
                    })
                }
                console.log('userInfo', userInfo)
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
        email: userInfo.email,
        phone: userInfo.phone,
        address: userInfo.address,
        note: ""
    }
    /* onSubmit send data card */
    const hanldChangePersional = async (values) => {
        let arrProduct = await JSON.parse(localStorage.getItem('listCard'))
        let newCard = {
            user_id: Cookies.get('user_id'),
            content: values.content,
            arrProduct: arrProduct
        }

        if (newCard) {
            cardAPI.postCard(newCard).then(async (data) => {
                if (data.status === 200) {
                    localStorage.clear('listCard')
                    setCard([])
                    showMessageAlert("Đặt hàng thành công", setMsg, setShowMsg, showMsg)
                    props.history.push('/')
                    await getInfo()
                }
            }).catch(async error => {
                if (error) {
                    showMessageErrorAlert("Lỗi vui lòng thử lại", setMsg, setShowMsgErr, showMsgErr)
                    props.history.push('/pay');
                }
            })
        }
    }
    return (
        <div className="form-pay">
            <Row>
                <Col lg='10'>
                    <Card>
                        <div >
                            <h1>Thông Tin Cá Nhân</h1>
                            <Formik
                                initialValues={initialValues}
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
                                                name="email"
                                                component={inputField}
                                                label="Email"
                                                type="email"
                                                placeholder="with a placeholder email"
                                            />

                                            <FastField
                                                name="phone"
                                                component={inputField}
                                                label="Số diện thoại"
                                                disabled
                                                placeholder="with a placeholder phone"
                                            />
                                            <FastField
                                                name="address"
                                                component={inputField}
                                                label="Địa chỉ"
                                                disabled
                                                placeholder="with a placeholder address"
                                            />

                                            <FastField
                                                name="note"
                                                component={inputField}
                                                label="Ghi chú"
                                                placeholder="Giao hàng ở địa chỉ khác..."
                                            />

                                            <div >
                                                <Button >
                                                    Thanh Toán
                                                </Button>
                                                <Link to="/">Tiếp tục mua hàng</Link>
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
export default withRouter(FormInfo);