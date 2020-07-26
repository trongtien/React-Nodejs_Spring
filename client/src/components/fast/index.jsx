import React from 'react'
import {
    Card, CardImg,
} from 'reactstrap';
import Icon from '../../contants/icon'
import './style.scss';

function Fast() {

    const handlScrollTop = () => {
        if (window.pageYOffset > 0) {
            window.scroll(0, 0);
        }
    }

    return (
        <div className="fast">
            <Card>
                <CardImg top width="100%" src={Icon.top} alt="Card image cap" onClick={() => handlScrollTop()} />
            </Card>
        </div>
    )
}

export default Fast