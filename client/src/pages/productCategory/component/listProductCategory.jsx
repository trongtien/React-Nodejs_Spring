import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
    Card,
    CardBody,
    CardLink,
    CardSubtitle,
    CardText, CardTitle, Col, CardImg,
    Row
} from "reactstrap";
import { useRecoilState, useSetRecoilState } from 'recoil';
import swal from 'sweetalert';
import { content } from '../../../recoil/contant';
import { addViewCard, listProductCategory, pagination, productViewState } from '../../../recoil/product';
import productApi from './../../../api/productApi';
import Icons from "./../../../contants/icon";
import { addToCart, cardState } from './../../../recoil/card';
import "./style.scss";


// import PropTypes from 'prop-types';

ListProductCategory.propTypes = {
    url_state: PropTypes.object.isRequired,
}

function ListProductCategory(props) {
    const { url_state } = props
    const [productView, setProductView] = useRecoilState(productViewState);
    const [listProduct, setListProduct] = useRecoilState(listProductCategory);
    const [paginational, setPaginational] = useRecoilState(pagination);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const setMsg = useSetRecoilState(content);

    React.useEffect(() => {
        async function getProductCateory() {
            try {
                let resData = await productApi.getProductByCategory(url_state, paginational._limit, paginational._page)
                let { data } = await resData

                await setListProduct(data.productCategory)
            } catch (error) {
                return error.message
            }
        }
        getProductCateory()
    }, [url_state, paginational])

    React.useEffect(() => {
        async function getProductCateory() {
            try {
                let resData = await productApi.getProductByCategory(url_state, paginational._limit, paginational._page)
                let { data } = await resData

                await setPaginational({
                    ...paginational,
                    _totalRows: data.totalProductCategory
                })
            } catch (error) {
                return error.message
            }
        }
        getProductCateory()
    }, [])

    // function handlPageChangeSamekind(newPage) {
    //     setPaginational({
    //         ...paginational,
    //         _page: newPage
    //     });
    // }


    function handleAddToCard(item) {
        if (item.quantity === 0) {
            swal({
                title: "Sản phẩm đã hết hàng",
                icon: "error",
                buttons: false,
                timer: 1500
            });
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);
            localStorage.setItem('listCard', JSON.stringify(newCart))
            swal({
                title: "Thêm giỏ hàng thành công",
                icon: "success",
                buttons: false,
                timer: 1500
            });
        }
    }
    async function handleClick(item) {
        const viewCard = addViewCard(productView, item);
        setProductView(viewCard)
        await Cookies.set('viewProduct', JSON.stringify(viewCard))
        localStorage.setItem('viewProduct', JSON.stringify(viewCard))
    }

    return (
        <Row xs="2" sm="2" md="3" lg="4" xl="4" >
            {
                listProduct === undefined ? "" :
                    listProduct.map(item => {
                        return (
                            <Col >
                                <Card className="card-product-category" key={item.product_id}>
                                    <CardImg width="50%" height="50%" src={require(`../../../assets/image/${item.image}`)} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className={item.quantity > 0 ? "out-of-stock-product-category" : "out-of-stock-product-category-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardSubtitle
                                            style={{ fontWeight: "600" }}
                                        >{item.discount === 0 ? item.price : item.discount} /kg</CardSubtitle>
                                        <CardText style={{
                                            textDecoration: "line-through",
                                            fontSize: "16px",
                                            color: "red",
                                            fontWeight: "600"
                                        }}>{item.discount === 0 ? "" : `${item.price} /kg`} </CardText>
                                    </CardBody>

                                    <div className="card-footer-product-category">
                                        <div className="card-link-product-category">
                                            <Link to={`/product/${item.product_id}`} onClick={() => handleClick(item)}> <img src={Icons.viewIcon} /></Link>
                                            <CardLink
                                                classstyle={{ borderRight: "1px solid #333333" }}
                                            ></CardLink>
                                            <CardLink onClick={() => handleAddToCard(item)}>
                                                <img src={Icons.cartIcon} />
                                            </CardLink>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
            }
            {/* 
            <PaginationComponent
                pagination={paginational}
                onPageChange={handlPageChangeSamekind}
            /> */}

        </Row >
    );
}

export default withRouter(ListProductCategory);
