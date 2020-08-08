import React from 'react'
import {
    Col, Card, CardImg, CardBody, CardLink,
    CardTitle, CardSubtitle,
    CardText, Row
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.scss'
import Icons from '../../../../contants/icon'
import { content, showAlert, showMessageAlert, showAlertError, showMessageErrorAlert } from '../../../../recoil/contant';

import { listProductState } from './../../../../recoil/product'
import { cardState, addToCart } from './../../../../recoil/card'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'

function Product() {
    const dataProduct = useRecoilValue(listProductState)
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);
    const { data } = dataProduct


    function handleAddToCard(item) {
        if (item.status_product === 0) {
            showMessageErrorAlert("Sản phẩm đã hết hàng", setMsg, setShowMsgErr, showMsgErr)
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);
            localStorage.setItem('listCard', JSON.stringify(newCart))
            showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
        }
    }

    return (
        <Row xs="2" sm="2" md="3" lg="4" xl="4" >
            {
                data === undefined ? "" :
                    data.map(item => {
                        return (
                            <Col key={item.product_id}>
                                <Card>
                                    <CardImg width="50%" height="50%" src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className={item.status_product === 1 ? "out-of-stock" : "out-of-stock-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.product_name}</CardTitle>
                                        <CardSubtitle>{item.price} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === undefined ? "" : item.discount}</CardText>
                                    </CardBody>

                                    <div className="card-footer">
                                        <div className="card-link">
                                            <Link to={`/product/${item.product_id}`}><img src={Icons.viewIcon} /></Link>
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

export default Product;