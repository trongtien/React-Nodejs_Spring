import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import FormInfo from './component/formInfo/FormInfo'
import CardSelected from './component/cardSeleted/CardSelected'

function Pay(props) {
    return (
        <Container fluid={true} style={{ marginTop: '10px' }}>
            <Row className="pay">
                <Col xs="12" sm="12" md="9" lg="6" xl="6" style={{ marginTop: "2rem" }}><CardSelected /></Col>
                <Col xs="12" sm="12" md="3" lg="6" xl="6"><FormInfo /></Col>
            </Row>
        </Container>
    );
}

export default withRouter(Pay);