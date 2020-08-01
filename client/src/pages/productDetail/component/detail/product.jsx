import React from 'react'
import {
    Row, Col, Card, CardImg, CardTitle, Button, Input
} from 'reactstrap';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, CardText } from 'reactstrap';
import './style.scss'
// import Icons from '../../../../contants/icon'
import Images from '../../../../contants/image'
import CommentComponent from './../../../../components/comment/comment'
import ProductSameKindComponent from './../productSameKind/productSamekind'

function Product(props) {
    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Card className="card-detailt">
                <Col className="title-name">
                    <CardTitle>Tên san phẩm</CardTitle>
                </Col>
                <Row>
                    <Col className="detail-image">
                        <CardImg top width="100%" src={Images.hongxiem} />
                    </Col>
                    <Col className="detail-product">
                        <CardTitle>tên sản </CardTitle>
                        <CardTitle>Giá: </CardTitle>
                        <CardTitle>Trạng Thái: </CardTitle>
                        <CardTitle className="count-product">
                            <CardTitle>
                                Số lượng:
                            </CardTitle>
                            <CardTitle> <Input /> </CardTitle>
                        </CardTitle>
                        <Button color="danger">ĐẶT MUA SẢN PHẨM</Button>
                    </Col>
                </Row>

                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            THÔNG TIN SẢN PHẨM
                    </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            BÌNH LUẬN
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <CommentComponent />
                    </TabPane>
                </TabContent>
                <Col className="title-name">
                    <CardTitle>Sản phẩm cùng loại</CardTitle>
                </Col>
                <ProductSameKindComponent />
            </Card>
        </div >
    )
}

export default Product;