import React from 'react'
import './style.scss'
import { Table, Button, Col } from 'reactstrap';
import { useRecoilValue } from "recoil";
import { billState } from '../../../../recoil/card';

function CartBill() {
  const bill = useRecoilValue(billState);
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>TỔNG GIỎ HÀNG</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> Tổng số sản phẩm</th>
            <td>{bill.countProduct}</td>
          </tr>
          <tr>
            <th scope="row">TỔNG Tiền</th>
            <td>{bill.totalMonney}</td>
          </tr>
        </tbody>
      </Table>
      <Button color="danger">Thanh toán</Button>
    </div>
  )
}

export default CartBill