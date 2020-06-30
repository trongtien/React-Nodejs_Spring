import React from 'react'
import { Spinner } from 'reactstrap'
import './style.scss'

function Loading() {
  return (
    <div className="loading">
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
    </div>
  )
}
export default Loading;