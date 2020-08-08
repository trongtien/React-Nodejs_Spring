import PropTypes from 'prop-types';
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
import { useRecoilState, useSetRecoilState } from 'recoil';
import { content, showAlert, showAlertError, showMessageAlert, showMessageErrorAlert } from '../../../../recoil/contant';
import { listProductCategory } from '../../../../recoil/product';
import PaginationComponent from "./../../../../components/pagination/PaginationComponent";
import Icons from "./../../../../contants/icon";
import { addToCart, cardState } from './../../../../recoil/card';
import "./style.scss";


ProductSameKindComponent.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChangeDetail: PropTypes.func,
}

ProductSameKindComponent.defaulttProps = {
  onPageChangeDetail: null,
}


function ProductSameKindComponent(props) {
  // const [product, setProduct] = useRecoilState(productDetail);
  const [listProduct, setListProduct] = useRecoilState(listProductCategory);
  const { pagination, onPageChangeDetail } = props
  const [stateCard, setStatCard] = useRecoilState(cardState)
  const [showMsg, setShowMsg] = useRecoilState(showAlert);
  const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
  const setMsg = useSetRecoilState(content);
  // const [pagination, setPagination] = useRecoilValue(paginationState)

  async function handlClick(product_id) {

    console.log("product_id", product_id)
  }

  function handlPageChangeSamekind(newPage) {
    if (onPageChangeDetail) {
      onPageChangeDetail(newPage)
    }
  }

  function handleAddToCard(item) {
    if (item.status_product === 0) {
      showMessageErrorAlert("Sản phẩm đã hết hàng", setMsg, setShowMsgErr, showMsgErr)
    } else {
      const newCart = addToCart(stateCard, item);
      setStatCard(newCart);
      localStorage.setItem('listCard', JSON.stringify(newCart))
      showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
    }
  }

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
                        <Link to={`/product/${item.product_id}`} onClick={() => handlClick(item.product_id)} > <img src={Icons.viewIcon} /></Link>
                        <CardLink
                          classstyle={{ borderRight: "1px solid #333333" }}
                        ></CardLink>
                        <CardLink onClick={() => handleAddToCard(item)}>
                          <img src={Icons.cartIcon} />
                        </CardLink>
                      </div>
                    </div>
                  </Card>
                </Col>
              )
            })
        }
        <PaginationComponent
          pagination={pagination}
          onPageChange={handlPageChangeSamekind}
        />
      </Row>
    </div >
  );
}

export default withRouter(ProductSameKindComponent);
