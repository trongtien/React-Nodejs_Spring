import React from 'react';
import ProductList from './component/productList'
// import BlogList from './components/BlogList/Blog'
import Banner from './../../components/banner/Banner'
import {
  Row, Col,
  Button,
  Container
} from 'reactstrap';

function Home(props) {
  return (
    <div className="home-page">
      <Container className="product " fluid={true} style={{ marginTop: '10px' }}>
        <div className="a-center">
          <h2><span>TRÁI CÂY SẠCH</span></h2>
        </div>
        <ProductList />
        <Row xs="12" className="toggle-product">
          <Col >
            <Button color="primary">Xem Thêm</Button>
          </Col>
        </Row>
      </Container>
      <Banner />

      { /*

      <Container className="product " fluid={true} style={{ marginTop: '10px' }}>
        <div className="a-center">
          <h2><span>TRÁI CÂY SẠCH</span></h2>
        </div>

        <BlogList />

        <Row xs="12" className="toggle-product">
          <Col >
            <Button color="primary">Xem Thêm</Button>
          </Col>
        </Row>
      </Container> */}

    </div>
  );
}

export default Home;