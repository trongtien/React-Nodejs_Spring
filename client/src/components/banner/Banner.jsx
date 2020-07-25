import React from 'react'
import Icons from '../../contants/icon'
import { Row, Col, CardImg, CardTitle, CardText, Container } from 'reactstrap';
import './style.scss'

function Banner(props) {
    return (
        <div className="banner">
            <Container fluid={true}>
                <Row xs="3">
                    <Col className="banner-content">
                        <CardImg src={Icons.shieldIcon}></CardImg>
                        <div className="cart-body">
                            <CardTitle >Chất lượng</CardTitle>
                            <CardText>Chất lượng đảm bảo, an toàn</CardText>
                        </div>
                    </Col>
                    <Col className="banner-content">
                        <CardImg src={Icons.calendarIcon}></CardImg>
                        <div className="cart-body">
                            <CardTitle>Hình thức làm việc</CardTitle>
                            <CardText>Hỗ trợ 24/7, phản hồi nhanh chóng</CardText>
                        </div>
                    </Col>
                    <Col className="banner-content">
                        <CardImg src={Icons.deliveryTruck}></CardImg>
                        <div className="cart-body">
                            <CardTitle>Vận chuyển</CardTitle>
                            <CardText>Ship hàng toàn quốc</CardText>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;