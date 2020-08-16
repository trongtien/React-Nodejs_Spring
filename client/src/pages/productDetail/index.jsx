import React from 'react'
import {
    Row, Col, Container
} from 'reactstrap';
import ProductDetail from './component/detail/product'
import ListCategory from './../../components/category'

function ProductDetailt() {
    return (
        <div>
            <Container fluid={true} style={{ marginTop: '10px' }}>
                <Row>
                    <Col xs="12" sm="12" md="9" lg="10" xl="9" > <ProductDetail /></Col>
                    <Col xs="12" sm="12" md="3" lg="2" xl="3"> <ListCategory /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetailt;