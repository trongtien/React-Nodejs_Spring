import { FastField, Form, Formik } from "formik";
import Cookies from 'js-cookie';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap';
import { useRecoilState } from "recoil";
import swal from 'sweetalert';
import { statusAuthLogin } from '../../recoil/authState';
import { listComment } from '../../recoil/comment';
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
            }
        } else {
            swal({
                title: "Đăng nhập để tham gia bình luận",
                icon: "error",
                buttons: false,
                timer: 1500
            });
            setTimeout(() => {
                setAuthFormLogin(!AuthFormLogin)
            }, 2000)
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
                                                <Col className="name-user">{item.user.fullname}</Col>
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