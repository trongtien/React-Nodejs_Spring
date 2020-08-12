import React from "react";
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import {
    Card,
    CardBody, CardImg,
    CardLink,
    CardSubtitle,
    CardText, CardTitle, Col,
    Row
} from "reactstrap";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { content, showAlert, showAlertError, showMessageAlert, showMessageErrorAlert } from '../../../recoil/contant';
import { listProductCategory, pagination, addViewCard, productViewState } from '../../../recoil/product';

import productApi from './../../../api/productApi';
import Icons from "./../../../contants/icon";
import PaginationComponent from "./../../../components/pagination/PaginationComponent";
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
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);

    React.useEffect(() => {
        async function getProductCateory() {
            try {
                // let category_id = await parseInt(Object.assign(props.match.params.category_id))
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
                // let category_id = await parseInt(Object.assign(props.match.params.category_id))
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
        if (item.amount === 0) {
            showMessageErrorAlert("Sản phẩm đã hết hàng", setMsg, setShowMsgErr, showMsgErr)
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);
            localStorage.setItem('listCard', JSON.stringify(newCart))
            showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
        }
    }
    async function handleClick(item) {
        const viewCard = addViewCard(productView, item);
        setProductView(viewCard)
        await Cookies.set('viewProduct', JSON.stringify(viewCard))
        localStorage.setItem('viewProduct', JSON.stringify(viewCard))
        console.log('handleClick', viewCard)
    }

    return (
        <Row xs="2" sm="2" md="3" lg="4" xl="4" >
            {
                listProduct === undefined ? "" :
                    listProduct.map(item => {
                        return (
                            <Col >
                                <Card className="card-product-category" key={item.product_id}>
                                    <CardImg width="50%" height="50%" src={require(`./../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className={item.amount > 0 ? "out-of-stock-product-category" : "out-of-stock-product-category-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.product_name}</CardTitle>
                                        <CardSubtitle>{item.price} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === undefined ? "" : item.discount}</CardText>
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
