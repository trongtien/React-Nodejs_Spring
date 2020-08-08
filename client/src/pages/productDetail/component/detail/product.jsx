import React from 'react'
import {
    Row, Col, Card, CardImg, CardTitle, Button, CardText
} from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { useRecoilState, useSetRecoilState } from "recoil";
import parse from 'html-react-parser'
import './style.scss'


// import Images from '../../../../contants/image'
import CommentComponent from './../../../../components/comment/comment'
import ProductSameKindComponent from './../productSameKind/productSamekind'
import { productDetail, listProductCategory, pagination } from '../../../../recoil/product';

import productApi from './../../../../api/productApi'




function Product(props) {
    const [product, setProduct] = useRecoilState(productDetail);
    const setListProduct = useSetRecoilState(listProductCategory);
    const [activeTab, setActiveTab] = React.useState('1');
    const [paginational, setPaginational] = useRecoilState(pagination);


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    /* onClick pagination */
    function onPagechange(newPage) {
        console.log('newPage', newPage)
        setPaginational({
            ...paginational,
            _page: newPage
        });
    }

    React.useEffect(() => {
        async function getProductById() {
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
    }, [paginational])

    React.useEffect(() => {
        async function getProduct() {
            try {
                const product_id = await parseInt(Object.assign(props.match.params.productId))
                let resData = await productApi.getById(product_id, paginational._limit, paginational._page)
                let { data } = await resData
                await setPaginational({
                    ...paginational,
                    _totalRows: data.totalProductCategory
                })
            } catch (error) {
                return error.message
            }
        }
        getProduct()
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
                                        <Col className="detail-image" style={{
                                            borderBottom: "1px solid #eff0f5",
                                            boxSizing: "border-box"
                                        }}>
                                            <CardImg top width="100%"
                                                style={{
                                                    border: "5px solid #ffa233"
                                                }}
                                                src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)}
                                            />
                                        </Col>
                                        <Col className="detail-product">
                                            <CardTitle style={{
                                                color: "#212121",
                                                fontSize: "22px",
                                                fontWeight: "normal",
                                                wordBreak: "break-word",
                                                overflowWrap: "break-word"

                                            }}>{item.product_name} </CardTitle>
                                            <CardTitle style={{
                                                fontSize: "30px",
                                                color: "#f57224"
                                            }}>{item.price} đ</CardTitle>
                                            <CardTitle style={{
                                                color: "#757575",
                                                fontSize: "16px",
                                                fontWeight: "normal",
                                                verticalAlign: "top"
                                            }}> {item.status_product === 1 ? "Còn hàng" : "Hết hàng"} </CardTitle>

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
                                                    <CardText > {parse(item.content)}</CardText>
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
                <ProductSameKindComponent
                    pagination={paginational}
                    onPageChangeDetail={onPagechange}
                />
            </Card>
        </div >
    )
}

export default withRouter(Product);