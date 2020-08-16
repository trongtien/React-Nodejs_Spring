import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Col,
  Container, Row
} from 'reactstrap';
import { useRecoilState, useSetRecoilState } from "recoil";
import { paginationPageHome } from '../../recoil/product';
import PaginationComponent from "./../../components/pagination/PaginationComponent";
import { productViewState } from './../../recoil/product';
import ProductList from './component/productList';
import ProductHistory from './component/productHistory'

function Home(props) {
  const [paginationalPageHome, setPaginationalPageHome] = useRecoilState(paginationPageHome);
  const [productView, setViewProduct] = useRecoilState(productViewState)

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
  console.log('productView', productView)
  return (
    <div className="home-page">
      <Container className="product " fluid={true} style={{ marginTop: '10px' }}>
        {
          productView === [] ?
            "" :
            (<div className="a-center">
              <h2><span>SẢN PHẨM ĐÃ XEM</span></h2>
            </div>)
        }
        {
          productView === undefined ? "" :
            (
              <ProductHistory />
            )
        }


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
      {/* <Banner /> */}

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