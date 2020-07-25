import React from 'react'
import {
    Col, Card, CardImg, CardBody, CardLink,
    CardTitle, CardSubtitle,
    CardText, Row
} from 'reactstrap';
import './style.scss'
import Icons from '../../../../contants/icon'
import Images from '../../../../contants/image'
import { listProductState } from './../../../../recoil/product'
import { useRecoilValue } from 'recoil'

function Product() {
    const dataProduct = useRecoilValue(listProductState)
    const { data } = dataProduct

    return (
        <Row xs="2" sm="2" md="3" lg="4" xl="4" >
            {
                data === undefined ? "" :
                    data.map(item => {
                        return (
                            <Col key={item.product_id}>
                                <Card>
                                    <CardImg width="50%" height="50%" src={item.image} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className={item.status_product === 1 ? "out-of-stock" : "out-of-stock-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.product_name}</CardTitle>
                                        <CardSubtitle>{item.price} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === undefined ? "" : item.discount}</CardText>
                                    </CardBody>

                                    <div className="card-footer">
                                        <div className="card-link">
                                            <CardLink href="#"><img src={Icons.viewIcon} /></CardLink>
                                            <CardLink style={{ borderRight: '1px solid #333333' }}></CardLink>
                                            <CardLink href="#"><img src={Icons.cartIcon} /></CardLink>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
            }
        </Row >
        // <Row xs="12" className="toggle-product">
        //   <Col >
        //     <Button color="primary">Xem Thêm</Button>
        //   </Col>
        // </Row>
    )
}

export default Product;