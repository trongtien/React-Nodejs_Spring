import React from 'react'
import {
    Row, Col, Container
} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import ListProductCategory from './component/listProductCategory'
import CategoryComponent from './../../components/category'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { urlId } from '../../recoil/category';

function ProductCategory(props) {
    const [url_state, setUrl_state] = useRecoilState(urlId)

    React.useEffect(() => {
        async function getUrl() {
            let url_category_id = await parseInt(Object.assign(props.match.params.category_id))
            return setUrl_state(url_category_id)
        }
        getUrl()
    }, [])

    async function handleClich(category_id) {
        await setUrl_state(category_id)
    }


    return (
        <div>
            <Container fluid={true} style={{ marginTop: '10px' }}>
                <Row className="product-category">
                    <Col xs="12" sm="12" md="9" lg="10" xl="9" > <ListProductCategory url_state={url_state} /></Col>
                    <Col xs="12" sm="12" md="3" lg="2" xl="3"><CategoryComponent onPageChangeCatrgory={handleClich} /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(ProductCategory);