import { FastField, Form, Formik } from "formik";
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { statusAuthLogin } from '../../recoil/authState';
import { listComment } from '../../recoil/comment';
import { content, showAlertError, showMessageErrorAlert } from '../../recoil/contant';
import commentAPI from './../../api/commentApi';
import inputField from './../../components/formik/inputField';
import './style.scss';

Comment.propTypes = {
    id_url: PropTypes.object.isRequired,
    onChangeComment: PropTypes.func,
}

Comment.defaulttProps = {
    onChangeComment: null,
}

function Comment(props) {
    const { id_url, onChangeComment } = props
    const [commentList, setCommentList] = useRecoilState(listComment);
    const [AuthFormLogin, setAuthFormLogin] = useRecoilState(statusAuthLogin);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);

    const initialValues = {
        content: ""
    }
    const hanldComment = async (values) => {
        let verity = await Cookies.get('node_access_token')
        if (verity) {
            if (!(values.content)) {
                return
            } else {
                let newComment = {
                    product_id: id_url,
                    user_id: Cookies.get('user_id'),
                    content: values.content
                }

                if (onChangeComment) {
                    onChangeComment(newComment)
                }
                // commentAPI.postComment(newComment).then(async (result) => {

                //     let { data } = result
                //     console.log('data comment response', data)
                //     await setCommentList({
                //         ...commentList,
                //         data
                //     })
                //     console.log('comment list 121', commentList)
                // })

            }
        } else {
            showMessageErrorAlert("Đăng nhập để tham gia bình luận", setMsg, setShowMsgErr, showMsgErr)
            setAuthFormLogin(!AuthFormLogin)
        }
    }
    return (
        <div>
            <Row>
                <Col sm="12" className="count-comment">
                    <CardTitle>
                        Hiện có {commentList.totalComment} bình luận
                    </CardTitle>
                </Col>
                <Col sm="12" className="list-comment">
                    {

                        commentList.dataComment === undefined ? "" :
                            commentList.dataComment.map(item => {
                                return (
                                    <Card key={item.comment_id}>
                                        <CardTitle>
                                            <Row>
                                                <Col className="name-user">Tên người bình luận</Col>
                                                <Col className="time-content">{moment(item.updatedAt).format('MM/DD/YYYY,  h:mm a')}</Col>
                                            </Row>
                                        </CardTitle>
                                        <CardText>
                                            {item.content}
                                        </CardText>
                                    </Card>
                                )
                            })
                    }

                </Col>

                <Col sm="12" className="content">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => hanldComment(values)}
                    >
                        {formikProps => {
                            return (
                                <Form className="form-content">
                                    <FastField
                                        name="content"
                                        component={inputField}
                                        className="input-content"
                                        type="textarea"
                                        placeholder="with a placeholder content"
                                    />

                                    <Button className="submit-content" >Đăng</Button>
                                </Form>
                            )
                        }}
                    </Formik>

                </Col>
            </Row>
        </div >
    )
}

export default withRouter(Comment);