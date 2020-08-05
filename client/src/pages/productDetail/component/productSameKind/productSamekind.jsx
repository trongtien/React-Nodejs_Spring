import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardBody, CardImg,
  CardLink,
  CardSubtitle,
  CardText, CardTitle, Col,
  Row
} from "reactstrap";
import PaginationComponent from "./../../../../components/pagination/PaginationComponent";
import { useRecoilState, useRecoilValue } from 'recoil';
import { pagination } from './../../../../recoil/product'
import { productDetail, listProductCategory } from '../../../../recoil/product';


import productApi from './../../../../api/productApi'
import Icons from "./../../../../contants/icon";
import "./style.scss";

function ProductSameKindComponent(props) {
  const [product, setProduct] = useRecoilState(productDetail);
  const [listProduct, setListProduct] = useRecoilState(listProductCategory);
  const paginational = useRecoilValue(pagination)

  return (
    <div className="product-kind-some">
      <Row xs="2" sm="2" md="2" lg="3" xl="3">
        {
          listProduct === undefined ? "" :
            listProduct.map(item => {
              return (
                <Col>
                  <Card className="card-kind-some" key={item.product_id}>
                    <CardImg
                      width="50%"
                      height="50%"
                      src={require(`./../../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle className={item.status_product === 1 ? "out-of-stock" : "out-of-stock-kind-active"}>
                        Hết hàng
                    </CardTitle>
                      <CardTitle>{item.product_name}</CardTitle>
                      <CardSubtitle>{item.price} /kg</CardSubtitle>
                      <CardText className="price-sale-kind">{item.discount === undefined ? "" : item.discount}</CardText>
                    </CardBody>

                    <div className="card-footer-kind">
                      <div className="card-link-same-kind">
                        <Link to={`/${item.product_id}`} > <img src={Icons.viewIcon} /></Link>
                        <CardLink
                          classstyle={{ borderRight: "1px solid #333333" }}
                        ></CardLink>
                        <CardLink href="#">
                          <img src={Icons.cartIcon} />
                        </CardLink>
                      </div>
                    </div>
                  </Card>
                </Col>
              )
            })
        }
        <PaginationComponent />
      </Row>
    </div >
  );
}

export default withRouter(ProductSameKindComponent);
