import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import CartList from './component/listCard/ListCard'
import CartBill from './component/listPill/ListBill'

function Cart(props) {
  return (
    <Container fluid={true} style={{ padding: '10px' }}>
      <CartList />
      <Row style={{ marginTop: '3%', marginBottom: '3%', padding: "15px" }}>
        <Col lg='8'> <Button onClick={() => props.history.push('/')}>Tiếp tục mua hàng</Button> </Col>
        <Col lg='4'> <CartBill /> </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Cart);