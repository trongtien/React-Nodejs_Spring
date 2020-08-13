import React from 'react';
import { withRouter } from "react-router-dom";
import { Table, CardTitle, Col, Row } from 'reactstrap';
import { useRecoilState } from "recoil";
import { cardState, totalMoney } from '../../../../recoil/card';
import './style.scss';



function CardSelected(props) {
    const [card, setCard] = useRecoilState(cardState);
    return (
        <div>
            <CardTitle
                style={{
                    marginTop: "4rem",
                    fontFamily: "Florence, cursive",
                    textAlign: "center",
                    fontSize: "2.5rem"
                }}
            >Sản phẩm đã chọn</CardTitle>
            <Table responsive >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Đơn Giá</th>
                        <th>Số Lượng</th>
                        <th>Thành Tiền</th>
                    </tr>
                </thead>
                {
                    card.length > 0 ?
                        card.map((cardItem, index) => {
                            return (
                                <tbody>
                                    <tr className="list-cart-product" key={cardItem.product_id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{cardItem.product_name}</td>
                                        <td>{cardItem.discount === null ? cardItem.price : cardItem.discount}</td>
                                        <td><div className="input-count"> <span>{cardItem.amount}</span></div></td>
                                        <td>{cardItem.discount === null ? cardItem.price * cardItem.amount : cardItem.discount * cardItem.amount}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                        : " "
                }

            </Table >
            <Row>
                <Col lg='6'
                    style={{ marginLeft: "50%" }}
                >
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>TỔNG GIỎ HÀNG</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"> Tổng số sản phẩm</th>
                                <td>{card.length}</td>
                            </tr>
                            <tr>
                                <th scope="row">Tổng Tiền</th>
                                <td>{totalMoney(card)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>


        </div>

    )
}
export default withRouter(CardSelected);