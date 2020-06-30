import React from "react";
import "./style.scss";
import Icons from "../../Contants/icon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Collapse,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

HeaderComponent.propTypes = {
  onClickLogin: PropTypes.func,
};
HeaderComponent.defaultProps = {
  onClickLogin: null,
};
function HeaderComponent(props) {
  const { onClickLogin } = props;

  function handlClick() {
    if (onClickLogin) {
      onClickLogin();
    }
  }

  return (
    <header className="header">
      <Navbar light expand="md">
        <NavbarBrand href="#" className="text-logo">
          FruitShop
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" >
                Trang Chủ
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" >
                Giới thiệu
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link">
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

          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <img src={Icons.searchIcon} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <NavbarText onClick={() => handlClick()}> Đăng Nhập </NavbarText>
          <Link >Đăng Ký</Link>
          <Link >Giỏ Hàng</Link>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default HeaderComponent;
