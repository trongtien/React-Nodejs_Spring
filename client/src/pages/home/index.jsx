import React from 'react';
import ProductList from './component/productList'
// import BlogList from './components/BlogList/Blog'
import Banner from './../../components/banner/Banner'
import {
  Row, Col,
  Button,
  Container,
  PaginationItem, PaginationLink
} from 'reactstrap';
import { paginationPageHome } from '../../recoil/product';
import { withRouter } from 'react-router-dom'
import { useRecoilState } from "recoil";
import PaginationComponent from "./../../components/pagination/PaginationComponent";
import { productViewState } from './../../recoil/product'
import { useSetRecoilState } from 'recoil'

function Home(props) {
  const [paginationalPageHome, setPaginationalPageHome] = useRecoilState(paginationPageHome);
  const setViewProduct = useSetRecoilState(productViewState)

  React.useState(() => {
    async function getViewProduct() {
      let dataViewProduct = await JSON.parse(localStorage.getItem('viewProduct'))
      if (dataViewProduct) {
        setViewProduct(dataViewProduct)
      }
    }
    getViewProduct()
  }, [])

  function handlPageChangeSamekind(newPage) {
    setPaginationalPageHome({
      ...paginationalPageHome,
      _page: newPage
    })
  }
  console.log('paginationalPageHome._totalRows', paginationalPageHome._totalRows)
  return (
    <div className="home-page">
      <Container className="product " fluid={true} style={{ marginTop: '10px' }}>
        <div className="a-center">
          <h2><span>TRÁI CÂY SẠCH</span></h2>
        </div>
        <ProductList />
        <Row xs="12" className="toggle-product">
          <Col >

            {
              Math.ceil(paginationalPageHome._totalRows / paginationalPageHome._limit) === 1 ?
                ""
                :

                <PaginationComponent
                  pagination={paginationalPageHome}
                  onPageChange={handlPageChangeSamekind}
                />
            }


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

export default withRouter(Home);