import React from 'react'
import {
    Row, Col, Container
} from 'reactstrap';
import ListProductCategory from './component/listProductCategory'

function ProductCategory() {
    return (
        <div>
            <Container fluid={true} style={{ marginTop: '10px' }}>
                <Row className="product-category">
                    <Col xs="12" sm="12" md="9" lg="10" xl="9" > <ListProductCategory /></Col>
                    <Col xs="12" sm="12" md="3" lg="2" xl="3"> danh muc</Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductCategory;