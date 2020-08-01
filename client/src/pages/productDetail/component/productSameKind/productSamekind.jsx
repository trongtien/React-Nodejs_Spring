import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import Images from "./../../../../contants/image";
import Icons from "./../../../../contants/icon";

import PaginationComponent from "./../../../../components/pagination/PaginationComponent";

function ProductSameKindComponent(props) {
  return (
    <div className="product-kind-some">
      <Row xs="2" sm="2" md="2" lg="3" xl="3">
        <Col>
          <Card className="card-kind-some">
            <CardImg
              width="50%"
              height="50%"
              src={Images.hongxiem}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="out-of-stock-kind-active">
                Hết hàng
              </CardTitle>
              <CardTitle>ten san pham</CardTitle>
              <CardSubtitle>gia /kg</CardSubtitle>
              <CardText className="price-sale-kind">gia khuyen mai</CardText>
            </CardBody>

            <div className="card-footer-kind">
              <div className="card-link-same-kind">
                <Link>
                  <img src={Icons.viewIcon} />
                </Link>
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
        <Col>
          <Card className="card-kind-some">
            <CardImg
              width="50%"
              height="50%"
              src={Images.hongxiem}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="out-of-stock-kind-active">
                Hết hàng
              </CardTitle>
              <CardTitle>ten san pham</CardTitle>
              <CardSubtitle>gia /kg</CardSubtitle>
              <CardText className="price-sale-kind">gia khuyen mai</CardText>
            </CardBody>

            <div className="card-footer-kind">
              <div className="card-link-same-kind">
                <Link>
                  <img src={Icons.viewIcon} />
                </Link>
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
        <Col>
          <Card className="card-kind-some">
            <CardImg
              width="50%"
              height="50%"
              src={Images.hongxiem}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="out-of-stock-kind-active">
                Hết hàng
              </CardTitle>
              <CardTitle>ten san pham</CardTitle>
              <CardSubtitle>gia /kg</CardSubtitle>
              <CardText className="price-sale-kind">gia khuyen mai</CardText>
            </CardBody>

            <div className="card-footer-kind">
              <div className="card-link-same-kind">
                <Link>
                  <img src={Icons.viewIcon} />
                </Link>
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
        <Col>
          <Card className="card-kind-some">
            <CardImg
              width="50%"
              height="50%"
              src={Images.hongxiem}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="out-of-stock-kind-active">
                Hết hàng
              </CardTitle>
              <CardTitle>ten san pham</CardTitle>
              <CardSubtitle>gia /kg</CardSubtitle>
              <CardText className="price-sale-kind">gia khuyen mai</CardText>
            </CardBody>

            <div className="card-footer-kind">
              <div className="card-link-same-kind">
                <Link>
                  <img src={Icons.viewIcon} />
                </Link>
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
        <Col>
          <Card className="card-kind-some">
            <CardImg
              width="50%"
              height="50%"
              src={Images.hongxiem}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="out-of-stock-kind-active">
                Hết hàng
              </CardTitle>
              <CardTitle>ten san pham</CardTitle>
              <CardSubtitle>gia /kg</CardSubtitle>
              <CardText className="price-sale-kind">gia khuyen mai</CardText>
            </CardBody>

            <div className="card-footer-kind">
              <div className="card-link-same-kind">
                <Link>
                  <img src={Icons.viewIcon} />
                </Link>
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
        <Col>
          <Card className="card-kind-some">
            <CardImg
              width="50%"
              height="50%"
              src={Images.hongxiem}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="out-of-stock-kind-active">
                Hết hàng
              </CardTitle>
              <CardTitle>ten san pham</CardTitle>
              <CardSubtitle>gia /kg</CardSubtitle>
              <CardText className="price-sale-kind">gia khuyen mai</CardText>
            </CardBody>

            <div className="card-footer-kind">
              <div className="card-link-same-kind">
                <Link>
                  <img src={Icons.viewIcon} />
                </Link>
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
        <PaginationComponent />
      </Row>
    </div>
  );
}

export default ProductSameKindComponent;
