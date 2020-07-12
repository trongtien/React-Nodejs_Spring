import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Button, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import "./style.scss";

LoginComponent.prototype = {
  hanldeClickClose: PropTypes.func,
};
LoginComponent.defaultProps = {
  hanldeClickClose: null,
};

function LoginComponent(props) {
  const { hanldeClickClose } = props;

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
                <p
                  onClick={() => {
                    hanldeClick();
                  }}
                >
                  x
                </p>
              </div>
              <Formik>
                {(formikProps) => {
                  const { value, error } = formikProps;
                  return (
                    // <FastField
                    // />
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="password placeholder"
                        />
                      </FormGroup>
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
                  );
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
