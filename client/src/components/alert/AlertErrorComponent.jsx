import React from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { useRecoilValue } from 'recoil';
import { content } from '../../recoil/contant.js'

import "./style.scss";

function AlerErrorComponent(props) {
    const msg = useRecoilValue(content)
    return (
        <AlertContainer>
            <Alert type="danger">{msg}</Alert>
        </AlertContainer>
    );
}
export default AlerErrorComponent;
