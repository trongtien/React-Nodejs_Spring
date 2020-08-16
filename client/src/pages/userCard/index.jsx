import React from 'react';
import { withRouter } from 'react-router-dom';
import CardNew from './component/cardNew/CardNew'
import {
    Row, Col
} from "reactstrap";
function UserCard(props) {

    return (
        <div style={{
            marginTop: "5%",
            marginBottom: "20%"
        }}>
            <Row>
                <Col lg="10" style={{ margin: "auto", textAlign: "center" }}>
                    <CardNew />
                </Col>

            </Row>

        </div >
    );
}

export default withRouter(UserCard);
