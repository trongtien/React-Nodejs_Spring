import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Card, CardBody, CardImg, CardLink,
    CardSubtitle,
    CardText, CardTitle, Col,

    Row
} from 'reactstrap';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Icons from '../../../../contants/icon';
import { content, showAlert, showAlertError, showMessageAlert, showMessageErrorAlert } from '../../../../recoil/contant';
import { addToCart, cardState } from './../../../../recoil/card';
import { productViewState } from './../../../../recoil/product';
import './style.scss';



function ProductHistory() {

    const [productHistory, setProductHistory] = useRecoilState(productViewState);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
    const setMsg = useSetRecoilState(content);

    function handleAddToCard(item) {
        if (item.status_product === 0) {
            showMessageErrorAlert("Sản phẩm đã hết hàng", setMsg, setShowMsgErr, showMsgErr)
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);
            showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
        }
    }

    return (
        <Row xs="2" sm="2" md="3" lg="4" xl="4" >
            {
                productHistory === undefined ? "" :
                    productHistory.map((item, index) => {
                        return (
                            <Col key={item.product_id} >
                                <Card>
                                    <CardImg width="50%" height="50%" src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className={item.amount > 0 ? "out-of-stock" : "out-of-stock-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.product_name}</CardTitle>
                                        <CardSubtitle>{item.discount === null ? item.price : item.discount} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === null ? "" : `${item.price} /kg`} </CardText>
                                    </CardBody>

                                    <div className="card-footer">
                                        <div className="card-link">
                                            <Link to={`/product/${item.product_id}`} ><img src={Icons.viewIcon} /></Link>
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

export default withRouter(ProductHistory);