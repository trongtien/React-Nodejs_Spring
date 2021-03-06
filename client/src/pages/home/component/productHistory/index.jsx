import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Card, CardBody, CardImg, CardLink,
    CardSubtitle,
    CardText, CardTitle, Col,

    Row
} from 'reactstrap';
import { useRecoilState, useSetRecoilState } from 'recoil';
import swal from 'sweetalert';
import Icons from '../../../../contants/icon';
import { content } from '../../../../recoil/contant';
import { addToCart, cardState } from './../../../../recoil/card';
import { productViewState } from './../../../../recoil/product';
import './style.scss';



function ProductHistory() {
    const [productHistory, setProductHistory] = useRecoilState(productViewState);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const setMsg = useSetRecoilState(content);

    function handleAddToCard(item) {
        if (item.status_product === 0) {
            swal({
                title: "Sản phẩm đã hết hàng",
                icon: "error",
                buttons: false,
                timer: 1000
            });
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);
            swal({
                title: "Thêm giỏ hàng thành công",
                icon: "success",
                buttons: false,
                timer: 1000
            });
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
                                    <CardImg width="50%" height="50%" src={require(`../../../../assets/image/${item.image}`)} />
                                    <CardBody>
                                        <CardTitle className={item.quantity > 0 ? "out-of-stock" : "out-of-stock-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardSubtitle>{item.discount === 0 ? item.price : item.discount} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === 0 ? "" : `${item.price} /kg`} </CardText>
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