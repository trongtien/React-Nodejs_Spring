import React from 'react'
import { Row, Col, CardTitle, CardText, Card, Form, FormGroup, Input, Button, CardBody } from 'reactstrap';
import './style.scss'

function Comment(props) {
    return (
        <div>
            <Row>
                <Col sm="12" className="count-comment">
                    <CardTitle>
                        0 bình luận
                    </CardTitle>
                </Col>
                <Col sm="12" className="list-comment">
                    <Card>
                        <CardTitle>
                            <Row>
                                <Col className="name-user">Tên người bình luận</Col>
                                <Col className="time-content">Thoi gian</Col>
                            </Row>
                        </CardTitle>
                        <CardText>
                            content
                        </CardText>
                    </Card>
                </Col>

                <Col sm="12" className="content">
                    <Form className="form-content">
                        <Input type="textarea" name="commment" id="commentText" className="input-content" />
                        <Button className="submit-content" >Đăng</Button>
                    </Form>
                </Col>
            </Row>
        </div >
    )
}

export default Comment;