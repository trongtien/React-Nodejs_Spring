import React from "react";
import { CardTitle, CardText, Row, Col } from "reactstrap";
import "./style.scss";

function FooterComponent(props) {
  return (
    <div className="container-fluid footer">
      <Row xs="1" sm="1" md="1" lg="2" xl="3">
        <Col>
          <CardTitle>THÔNG TIN LIÊN HỆ</CardTitle>
          <CardText>
            Siêu thị thực phẩm nhập khẩu an toàn, giá tốt phù hợp cho mọi gia
            đình
          </CardText>
          <CardText>Địa chỉ: 1105 đường 3 tháng 2 quận 11</CardText>
          <CardText>Liên Hệ: 0372176694 </CardText>
        </Col>
        <Col>
          <CardTitle>ĐIỀU KHOẢN SỬ DỤNG</CardTitle>
          <CardText>Chính sách đổi trả</CardText>
          <CardText>Chính sách mua hàng vận chuyển</CardText>
          <CardText>Chính sách bảo mật</CardText>
          <CardText>Điều khoản dịch vụ</CardText>
        </Col>
        <Col>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/SRMT.BichChi"
            data-width="400"
            data-hide-cover="false"
            data-show-facepile="true"
            data-adapt-container-width="true"
          ></div>
        </Col>
      </Row>
    </div>
  );
}
export default FooterComponent;
