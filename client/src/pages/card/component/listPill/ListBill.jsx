import Cookies from 'js-cookie';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { statusAuthLogin } from '../../../../recoil/authState';
import { cardState, totalMoney } from '../../../../recoil/card';
import { content, showAlertError, showMessageErrorAlert } from '../../../../recoil/contant';
import './style.scss';

function CartBill(props) {
  const [AuthFormLogin, setAuthFormLogin] = useRecoilState(statusAuthLogin);
  const card = useRecoilValue(cardState);
  const [showMsgErr, setShowMsgErr] = useRecoilState(showAlertError);
  const setMsg = useSetRecoilState(content);

  function handlePay() {
    let verity = Cookies.get('node_access_token')
    console.log('verity', verity)
    if (verity) {
      props.history.push("/pay")
    } else {
      console.log('no login')
      showMessageErrorAlert("Đăng nhập để thanh toán", setMsg, setShowMsgErr, showMsgErr)
      setAuthFormLogin(!AuthFormLogin)
    }
  }
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
            <td>{card.length}</td>
          </tr>
          <tr>
            <th scope="row">Tổng Tiền</th>
            <td>{totalMoney(card)}</td>
          </tr>
        </tbody>
      </Table>
      <Button color="danger" onClick={() => handlePay()}>Thanh toán</Button>
    </div>
  )
}

export default withRouter(CartBill)