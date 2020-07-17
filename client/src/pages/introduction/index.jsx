import React from 'react'
import './style.scss'
import { CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';


function Introduction() {
    return (
        <Row >
            <Col lg="12" style={{ backgroundImage: 'url(http://theme.hstatic.net/1000384235/1000541562/14/welcome_bg.jpg?v=263)', opacity: 'cover', padding: '210px 0 210px 0' }}>
                <Col lg="5" style={{ float: "right", marginRight: '200px' }}>
                    <CardTitle style={{ fontSize: '75px' }}>Welcome to</CardTitle>
                    <CardBody style={{ display: 'flex' }}>
                        <CardText style={{ fontSize: '55px', fontWeight: '500', color: '#30942A' }}>FruiShop</CardText>
                        <CardText style={{ marginLeft: '46px', fontSize: '22px', color: '#000', marginTop: '17px' }}>Tươi ngon tới tận cửa nhà
            Giao hàng nhanh trong 2H</CardText>
                    </CardBody>
                </Col>
            </Col>

            <Col lg="12" style={{ backgroundImage: 'url(http://theme.hstatic.net/1000384235/1000541562/14/connect_bg.jpg?v=263)', opacity: 'cover', padding: '120px 0 120px 0' }}>
                <Col lg="5" style={{ float: "left", marginLeft: '150px' }}>
                    <CardTitle style={{ color: '#30942A', fontWeight: 'bold', fontSize: '45px' }}>FruiShop</CardTitle>
                    <CardText style={{ fontWeight: 'bold', fontSize: '26px' }}>Nền tảng đầu tiên kết nối trực tiếp nhà sản xuất với người tiêu dùng</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px' }}>
                        FruiShop ra đời nhằm giải quyết tất thày các vấn đề hạn chế của quy trình sản xuất và cung cấp nông sản Việt.
                        Bằng việc số hóa từng loại nông sản trên nền tảng công nghệ, F99 đã tạo nên các gian hàng thương mại điện tử cho nông sản Việt,
                        cung cấp các sản phẩm đảm bảo chất lượng, an toàn cho sức khỏe. Ngược lại, thông qua F99,
                        các hộ nông sản và nhà sản xuất có thê tự tìm đầu ra cho sản phẩm,
                        từ đó gây dựng được thương hiệu của riêng mình.
          </CardText>
                </Col>
            </Col>

            <Col lg="12" style={{ backgroundImage: 'url(http://theme.hstatic.net/1000384235/1000541562/14/commitment_bg.jpg?v=263)', opacity: 'cover', padding: '105px 0 105px 0' }}>
                <Col lg="5" style={{ float: "right", marginRight: '190px' }}>
                    <CardTitle style={{ color: '#30942A', fontWeight: 'bold', fontSize: '45px' }}>Chọn FruiShop - Chọn cuộc sống xanh - Chọn tiện ích lớn</CardTitle>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}>MUA SẮM TIỆN LỢI - MỌI LÚC MỌI NƠI</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}>Đơn giản, an toàn, đa dạng</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}>ƯU ĐÃI ĐỘC QUYỀN - TIẾT KIỆM TỐI ĐA</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}> Giá rẻ bất ngờ, voucher ưu đãi</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}>QUY TRÌNH TỐI ƯU - GIAO HÀNG NHANH CHÓNG</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}>Giao hàng toàn quốc, hỗ trợ 24/7</CardText>
                    <CardText style={{ color: '#000', fontSize: '18px', fontWeight: '400' }}>Với tất cả các ưu thế về sản phẩm và dịch vụ đi đầu, FruiShop đã và đang ngày một phát triển lớn mạnh hơn nữa để có thể đáp ứng kỳ vọng của khách hàng toàn quốc, đem tới chất lượng cuộc sống ngày một tốt hơn cho người dân Việt</CardText>
                </Col>
            </Col>
        </Row >
    )
}
export default Introduction