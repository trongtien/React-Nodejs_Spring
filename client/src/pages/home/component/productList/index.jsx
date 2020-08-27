import Cookies from 'js-cookie';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Card, CardBody, CardLink,
    CardSubtitle,
    CardText, CardTitle, Col,
    Row
} from 'reactstrap';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import swal from 'sweetalert';
import Icons from '../../../../contants/icon';
import { content } from '../../../../recoil/contant';
import { addToCart, cardState } from './../../../../recoil/card';
import { addViewCard, productPageHome, productViewState } from './../../../../recoil/product';
import './style.scss';



function Product() {
    const [productView, setProductView] = useRecoilState(productViewState);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const setMsg = useSetRecoilState(content);


    // const dataProduct = useRecoilValue(listProductState)
    const dataProductHome = useRecoilValue(productPageHome)
    const { data } = dataProductHome
    console.log('data product home', data)

    function handleAddToCard(item) {
        if (item.quantity === 0) {
            swal({
                title: "Sản phẩm đã hết hàng",
                icon: "error",
                buttons: false,
                timer: 1000
            });
        } else {
            const newCart = addToCart(stateCard, item);
            setStatCard(newCart);

            localStorage.setItem('listCard', JSON.stringify(newCart))
            swal({
                title: "Thêm giỏ hàng thành công",
                icon: "success",
                buttons: false,
                timer: 1000
            });
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