import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardTitle, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { useRecoilValue } from "recoil";
import { listCategoryState } from '../../recoil/category';
import './style.scss';


Category.propTypes = {
    onPageChangeCatrgory: PropTypes.func,
}

Category.defaulttProps = {
    onPageChangeCatrgory: null,
}


function Category(props) {
    const { onPageChangeCatrgory } = props
    const listCategory = useRecoilValue(listCategoryState);



    function hanldeChange(category_id) {
        if (onPageChangeCatrgory) {
            onPageChangeCatrgory(category_id)
        }
    }
    return (
        <di>
            <Row>
                <Col className="title-name">
                    <CardTitle>Danh mục sản phẩm</CardTitle>
                </Col>
            </Row>

            <ListGroup>

                {
                    listCategory === undefined ? "" :
                        listCategory.map(item => {
                            return (
                                <ListGroupItem key={item.category_id}
                                    onClick={() => hanldeChange(item.category_id)}
                                >
                                    <Link className="nav-link"
                                        to={`/category/${item.category_id}`}
                                    >
                                        {item.name}
                                    </Link>
                                </ListGroupItem>
                            )
                        })
                }

            </ListGroup>
        </di>
    )
}

export default Category;