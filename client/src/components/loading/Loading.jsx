import React from 'react'
import { Spinner } from 'reactstrap'
import './style.scss'

function Loading() {
    return (
        <div className="loading">
            <Spinner style={{ width: '3rem', height: '3rem' }} color="primary" />{' '}
        </div>
    )
}
export default Loading;