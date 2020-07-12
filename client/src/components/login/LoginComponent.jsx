import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form, FastField } from "formik";
import inputField from '../formik/inputField'

import "./style.scss";

LoginComponent.prototype = {
  hanldeClickClose: PropTypes.func,
};
LoginComponent.defaultProps = {
  hanldeClickClose: null,
};

function LoginComponent(props) {
  const { hanldeClickClose } = props;
  const initialValues = {
    username: '',
    password: ''
  }

  function hanldeClick() {
    if (hanldeClickClose) {
      hanldeClickClose();
    }
  }
  return (
    <div className="form-login">
      <Row>
        <Col lg="7">
          <Card>
            <div className="cart-body">
              <div className="login-title">
                <h1>Login</h1>
                <p onClick={() => { hanldeClick(); }} > x</p>
              </div>
              <Formik
                initialValues={initialValues}
              >
                {formikProps => {
                  const { values, errors, touched } = formikProps
                  console.log(values, errors, touched)

                  return (
                    <Form>
                      <FastField
                        name="username"
                        component={inputField}

                        label="username"
                        placeholder="with a placeholder username"
                      />

                      <FastField
                        name="password"
                        component={inputField}

                        label="password"
                        placeholder="with a placeholder password"
                      />

                      <div cart-body>
                        <Button>Đăng Nhập </Button>
                        <Link
                          to="/register"
                          onClick={() => {
                            hanldeClick();
                          }}
                        >
                          Chưa có tài khoản
                        </Link>
                      </div>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default LoginComponent;
