// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import Icons from "../../contants/icon";
import {
  Collapse,
  DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
  NavbarBrand, NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { statusAuthLogin, useInfo, isLogin, clearLocalStorageUser } from './../../recoil/auth/authState';
import "./style.scss";

// HeaderComponent.propTypes = {

// };
// HeaderComponent.defaultProps = {

// };
function HeaderComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [AuthFormLogin, setAuthFormLogin] = useRecoilState(statusAuthLogin);
  const [isLoginUser, setisLoginUser] = useRecoilState(isLogin);
  const [UserInfo, setUserInfo] = useRecoilState(useInfo);

  const toggle = () => setIsOpen(!isOpen);

  const handlClicLogin = () => {
    setAuthFormLogin(!AuthFormLogin)
  }
  const handlLogOut = async () => {
    clearLocalStorageUser()
    let updateStatususe = isLoginUser
    await setisLoginUser(!updateStatususe)
    let UserInfo = " "
    await setUserInfo(UserInfo)
    return <Redirect to='/' />
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
            {
              isLoginUser === false ?
                <NavItem>
                  <Link className="nav-link" to="/Blog">
                    Đăng ký
                  </Link>
                </NavItem>
                : ""
            }
            {
              isLoginUser === false ?
                <NavItem>
                  <Link className="nav-link" onClick={() => handlClicLogin()}>
                    Đăng Nhập
                    </Link>
                </NavItem>
                : ""
            }
            {
              isLoginUser === true ?
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options{}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem onClick={() => handlLogOut()}>Đăng Xuất</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                : ""
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default HeaderComponent;
