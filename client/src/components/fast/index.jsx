import React from 'react'
import {
    Card, CardImg,
} from 'reactstrap';
import Icon from '../../contants/icon'
import './style.scss'
import { useState } from 'react';

function Fast() {
    const [scrolled, setScrolled] = useState(false)

    return (
        <div className="fast">
            <Card>
                <CardImg top width="100%" src={Icon.top} alt="Card image cap" />
            </Card>
        </div>
    )
}


export default Fast