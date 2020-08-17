import React from 'react'
import Cookies from 'js-cookie';
import {
    Col, Card, CardImg, CardBody, CardLink,
    CardTitle, CardSubtitle,
    CardText, Row
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import './style.scss'
import Icons from '../../../../contants/icon'
import { content, showAlert, showMessageAlert, showAlertError, showMessageErrorAlert } from '../../../../recoil/contant';

import { productPageHome, addViewCard, productViewState } from './../../../../recoil/product'

import { cardState, addToCart } from './../../../../recoil/card'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'

function Product() {
    const [productView, setProductView] = useRecoilState(productViewState);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);


    // const dataProduct = useRecoilValue(listProductState)
    const dataProductHome = useRecoilValue(productPageHome)
    const { data } = dataProductHome
    console.log('data product home', data)

    function handleAddToCard(item) {
        if (item.quantity === 0) {
            showMessageErrorAlert("Sản phẩm đã hết hàng", setMsg, setShowMsgErr, showMsgErr)
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);

            localStorage.setItem('listCard', JSON.stringify(newCart))
            showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
        }
    }

    /* hitory view card */
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
                data === undefined ? "" :
                    data.map(item => {
                        return (
                            <Col key={item.product_id} >
                                <Card>
                                    {/* <CardImg width="50%" height="50%" src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)} alt="Card image cap" /> */}
                                    <CardBody>
                                        <CardTitle className={item.quantity > 0 ? "out-of-stock" : "out-of-stock-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardSubtitle>{item.discount === null ? item.price : item.discount} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === null ? "" : `${item.price} /kg`} </CardText>
                                    </CardBody>

                                    <div className="card-footer">
                                        <div className="card-link">
                                            <Link to={`/product/${item.product_id}`} onClick={() => handleClick(item)}><img src={Icons.viewIcon} /></Link>
                                            <CardLink onClick={() => handleAddToCard(item)}><img src={Icons.cartIcon} /></CardLink>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
            }
        </Row >
    )
}

export default withRouter(Product);