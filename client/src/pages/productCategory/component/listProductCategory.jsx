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
import productApi from './../../../api/productApi'
import { listProductCategory, pagination } from '../../../recoil/product';

import Icons from "./../../../contants/icon";
// import PaginationComponent from "./../../../components/pagination/PaginationComponent";
import { cardState, addToCart } from './../../../recoil/card'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { content, showAlert, showMessageAlert } from '../../../recoil/contant';
import "./style.scss";
// import PropTypes from 'prop-types';

// ListProductCategory.propTypes = {
//     // pagination: PropTypes.object.isRequired,
//     // onPageChangeDetail: PropTypes.func,
// }

// ListProductCategory.defaulttProps = {
//     // onPageChangeDetail: null,
// }


function ListProductCategory(props) {
    const [listProduct, setListProduct] = useRecoilState(listProductCategory);
    const [paginational, setPaginational] = useRecoilState(pagination);
    const [stateCard, setStatCard] = useRecoilState(cardState)
    const [showMsg, setShowMsg] = useRecoilState(showAlert);
    const setMsg = useSetRecoilState(content);
    React.useEffect(() => {
        async function getProductCateory() {
            try {
                const category_id = await parseInt(Object.assign(props.match.params.category_id))
                let resData = await productApi.getProductByCategory(category_id, paginational._limit, paginational._page)
                let { data } = await resData

                await setListProduct(data.productCategory)
            } catch (error) {
                return error.message
            }
        }
        getProductCateory()
    }, [])

    function handleAddToCard(item) {
        const newCart = addToCart(stateCard, item);
        setStatCard(newCart);
        localStorage.setItem('listCard', JSON.stringify(newCart))
        showMessageAlert("Thêm giỏ hàng thành công", setMsg, setShowMsg, showMsg)
    }


    return (
        <Row xs="2" sm="2" md="3" lg="4" xl="4" >
            {
                listProduct === undefined ? "" :
                    listProduct.map(item => {
                        return (
                            <Col >
                                <Card className="card-product-category" key={item.product_id}>
                                    <CardImg width="50%" height="50%" src={require(`./../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className={item.status_product === 1 ? "out-of-stock-product-category" : "out-of-stock-product-category-active"}>Hết hàng</CardTitle>
                                        <CardTitle>{item.product_name}</CardTitle>
                                        <CardSubtitle>{item.price} /kg</CardSubtitle>
                                        <CardText className="price-sale">{item.discount === undefined ? "" : item.discount}</CardText>
                                    </CardBody>

                                    <div className="card-footer-product-category">
                                        <div className="card-link-product-category">
                                            <Link to={`/product/${item.product_id}`} > <img src={Icons.viewIcon} /></Link>
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
        </Row >

        // <Row xs="2" sm="2" md="2" lg="3" xl="3">
        //     <div className="product-kind-some">

        //         <div className="product-kind-some">
        //             <Row xs="2" sm="2" md="2" lg="3" xl="3">
        //                 {
        //                     listProduct === undefined ? "" :
        //                         listProduct.map(item => {
        //                             return (
        //                                 <Col>
        //                                     <Card className="card-kind-some" key={item.product_id}>
        //                                         <CardImg
        //                                             width="50%"
        //                                             height="50%"
        //                                             src={require(`./../../../../../durian/durian/src/main/resources/public/imgae-product/${item.image}`)}
        //                                             alt="Card image cap"
        //                                         />
        //                                         <CardBody>
        //                                             <CardTitle className={item.status_product === 1 ? "out-of-stock" : "out-of-stock-kind-active"}>
        //                                                 Hết hàng
        //                                         </CardTitle>
        //                                             <CardTitle>{item.product_name}</CardTitle>
        //                                             <CardSubtitle>{item.price} /kg</CardSubtitle>
        //                                             <CardText className="price-sale-kind">{item.discount === undefined ? "" : item.discount}</CardText>
        //                                         </CardBody>

        //                                         <div className="card-footer-kind">
        //                                             <div className="card-link-same-kind">
        //                                                 <Link to={`/${item.product_id}`}  > <img src={Icons.viewIcon} /></Link>
        //                                                 <CardLink
        //                                                     classstyle={{ borderRight: "1px solid #333333" }}
        //                                                 ></CardLink>
        //                                                 <CardLink href="#">
        //                                                     <img src={Icons.cartIcon} />
        //                                                 </CardLink>
        //                                             </div>
        //                                         </div>
        //                                     </Card>
        //                                 </Col>
        //                             )
        //                         })
        //                 }
        //                 {/* <PaginationComponent
        //             // pagination={pagination}
        //             // onPageChange={handlPageChangeSamekind}
        //             /> */}
        //             </Row>
        //         </div >

        //     </div >
        // </Row>


    );
}

export default withRouter(ListProductCategory);
