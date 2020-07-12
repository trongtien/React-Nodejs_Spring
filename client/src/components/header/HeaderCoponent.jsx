import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
// import Icons from "../../contants/icon";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

HeaderComponent.propTypes = {
  onClickLogin: PropTypes.func,
};
HeaderComponent.defaultProps = {
  onClickLogin: null,
};
function HeaderComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { onClickLogin } = props;

  function handlClick() {
    if (onClickLogin) {
      onClickLogin();
    }
  }

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="#" className="text-logo">
          FruitShop
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link className="nav-link" to="/">
              Trang Chủ
            </Link>
            <NavItem>
              <Link className="nav-link" to="/Introduction">
                Giới thiệu
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav className="mr-right" navbar>
            <NavItem>
              <Link className="nav-link" to="/Introduction">
                Giỏ hàng
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Blog">
                Đăng ký
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" onClick={() => handlClick()}>
                Đăng Nhập
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
