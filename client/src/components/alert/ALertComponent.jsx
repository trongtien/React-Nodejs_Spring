import React from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { useRecoilValue } from 'recoil';
import { content } from '../../recoil/contant.js'

import "./style.scss";

function AlertComponent(props) {
  const msg = useRecoilValue(content)
  console.log(msg)
  return (
    <AlertContainer>
      <Alert type="success">{msg}</Alert>
      {/*<Alert type="success">Oh, hai</Alert>*/}
    </AlertContainer>
  );
}
export default AlertComponent;
