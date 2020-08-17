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
import { productDetail, listProductCategory, pagination, addViewCard, productViewState } from '../../../../recoil/product';
import { listComment, paginationComment } from '../../../../recoil/comment';
import { content, showAlert, showAlertError, showMessageAlert, showMessageErrorAlert } from '../../../../recoil/contant';
import { addToCart, cardState, totalMoney } from './../../../../recoil/card';
import productApi from './../../../../api/productApi'
import commentAPI from './../../../../api/commentApi'




function Product(props) {
    const [productView, setProductView] = useRecoilState(productViewState);
    const [product, setProduct] = useRecoilState(productDetail);
    const setListProduct = useSetRecoilState(listProductCategory);
    // const setListComment = useSetRecoilState(listComment);
    const [commentList, setListComment] = useRecoilState(listComment);
    const [commentPagination, setCommentPagination] = useRecoilState(paginationComment);
    const [activeTab, setActiveTab] = React.useState('1');
    const [paginational, setPaginational] = useRecoilState(pagination);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);
    const [id_url, setId_url] = React.useState(null)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    /* onClick pagination */
    function onPagechange(newPage) {
        setPaginational({
            ...paginational,
            _page: newPage
        });
    }

    React.useEffect(() => {
        async function getProductById() {
            try {
                url()
                let resData = await productApi.getById(id_url, paginational._limit, paginational._page)
                let resComment = await commentAPI.getById(id_url, paginational._limit, paginational._page)

                let { data } = await resData
                let { dataComment } = await resComment
                await setListComment({
                    totalComment: dataComment.totalComment,
                    dataComment: dataComment.data
                })
                await setProduct(data.productDetail)
                await setListProduct(data.productCategory)

            } catch (error) {
                return error.message
            }
        }
        getProductById()
    }, [paginational, id_url])

    React.useEffect(() => {
        async function getProduct() {
            try {
                let product_id = await parseInt(Object.assign(props.match.params.productId))
                let resData = await productApi.getById(product_id, paginational._limit, paginational._page)
                let resComment = await commentAPI.getById(id_url, commentPagination._limit, commentPagination._page)
                let { data } = await resData
                let { dataComment } = await resComment

                await setPaginational({
                    ...paginational,
                    _totalRows: data.totalProductCategory
                })
                await setListComment({
                    totalComment: dataComment.totalComment,
                    dataComment: dataComment.data
                })

            } catch (error) {
                return error.message
            }
        }
        getProduct()
    }, [])

    async function url() {
        const product_id = await parseInt(Object.assign(props.match.params.productId))
        return setId_url(product_id)
    }

    async function onChangeUrl(product_id) {
        return setId_url(product_id)
    }


    function handleAddToCard(item) {
        if (item.amount === 0) {
            showMessageErrorAlert("Sản phẩm đã hết hàng", setMsg, setShowMsgErr, showMsgErr)
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);
            localStorage.setItem('listCard', JSON.stringify(newCart))
            showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
        }
    }

    /* post comment */
    function onHanleChangeComment(newComment) {
        commentAPI.postComment(newComment).then(async (result) => {
            let { data } = result

            commentAPI.getById(id_url, commentPagination._limit, commentPagination._page).then(dataNewComment => {
                setListComment({
                    totalComment: dataNewComment.totalComment,
                    dataComment: dataNewComment.data
                })
                console.log('data new list comment', commentList)
            })
        })

    }

    console.log('url', id_url)

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
                                            <CardTitle>{item.name}</CardTitle>
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

                                            }}>{item.name} </CardTitle>
                                            <CardTitle style={{
                                                fontSize: "30px",
                                                color: "#f57224"
                                            }}>{item.discount === null ? item.price : item.discount} đ</CardTitle>
                                            <CardTitle style={{
                                                fontSize: "20px",
                                                color: "#f57224",
                                                textDecoration: "line-through"
                                            }}>{item.discount === null ? "" : `${item.price} /kg`}</CardTitle>
                                            <CardTitle style={{
                                                color: "#757575",
                                                fontSize: "16px",
                                                fontWeight: "normal",
                                                verticalAlign: "top"
                                            }}> {item.quantity > 0 ? "Còn hàng" : "Hết hàng"} </CardTitle>

                                            <Button color="danger" onClick={() => handleAddToCard(item)}>ĐẶT MUA SẢN PHẨM</Button>
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
                                            <CommentComponent id_url={id_url} onChangeComment={onHanleChangeComment} />
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
                    onProductIdChane={onChangeUrl}
                />

            </Card>
        </div >
    )
}

export default withRouter(Product);