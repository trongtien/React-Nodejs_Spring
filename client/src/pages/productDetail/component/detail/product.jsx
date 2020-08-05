import React from 'react'
import {
    Row, Col, Card, CardImg, CardTitle, Button, CardText
} from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { useRecoilState, useSetRecoilState } from "recoil";
import './style.scss'

// import Images from '../../../../contants/image'
import CommentComponent from './../../../../components/comment/comment'
import ProductSameKindComponent from './../productSameKind/productSamekind'
import { productDetail, listProductCategory } from '../../../../recoil/product';

import productApi from './../../../../api/productApi'
import { pagination } from './../../../../recoil/product'
import { useRecoilValue } from 'recoil';


function Product(props) {
    const [product, setProduct] = useRecoilState(productDetail);
    const [listProduct, setListProduct] = useRecoilState(listProductCategory);
    const [activeTab, setActiveTab] = React.useState('1');
    const paginational = useRecoilValue(pagination)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    React.useEffect(() => {
        async function getProductById() {
            console.log('prop', props)
            try {
                const product_id = await parseInt(Object.assign(props.match.params.productId))
                let resData = await productApi.getById(product_id, paginational._limit, paginational._page)
                let { data } = await resData

                await setProduct(data.productDetail)
                await setListProduct(data.productCategory)

            } catch (error) {
                return error.message
            }
        }

        getProductById()
    }, [])

    return (
        <div>
            <Card className="card-detailt">
                {
                    product === undefined ? "" :
                        product.map(item => {
                            return (
                                <div>
                                    <Row>
                                        <Col className="title-name">
                                            <CardTitle>{item.product_name}</CardTitle>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="detail-image">
                                            <CardImg top width="100%"
                                                src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)}
                                            />
                                        </Col>
                                        <Col className="detail-product">
                                            <CardTitle>Tên sản phẩm: {item.product_name} </CardTitle>
                                            <CardTitle>Giá: {item.price}</CardTitle>
                                            <CardTitle>Trạng Thái: {item.status_product === 1 ? "Còn hàng" : "Hết hàng"} </CardTitle>

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
                                                    <CardText > {item.content}</CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <CommentComponent />
                                        </TabPane>
                                    </TabContent>

                                </div>
                            )
                        })
                }
                <Col className="title-name">
                    <CardTitle>Sản phẩm cùng loại</CardTitle>
                </Col>
                <ProductSameKindComponent />
            </Card>
        </div >
    )
}

export default withRouter(Product);