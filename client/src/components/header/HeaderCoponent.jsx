import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';
// import Icons from "../../contants/icon";
import {
  Button, Collapse,
  DropdownItem, DropdownMenu, DropdownToggle,
  Input, InputGroup, InputGroupAddon, Nav, Navbar,
  NavbarBrand, NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import { useRecoilState } from "recoil";
import { clearLocalStorageUser, isLogin, statusAuthLogin, useInfo } from '../../recoil/authState';
import "./style.scss";


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
      {/* fixed="top" */}
      <Navbar light expand="lg">
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
            <UncontrolledDropdown nav inNavbar >
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

          <InputGroup className="search">
            <Input />
            <InputGroupAddon addonType="append">
              <Button color="secondary">To </Button>
            </InputGroupAddon>
          </InputGroup>


          <Nav className="mr-right" navbar>
            <NavItem>
              <Link className="nav-link" to="/Introduction">
                Giỏ hàng
              </Link>
            </NavItem>
            {
              isLoginUser === false ?
                <NavItem>
                  <Link className="nav-link" to="/register">
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
                <UncontrolledDropdown nav inNavbar className="isLogin">
                  <DropdownToggle nav caret>
                    {Cookies.get('name')}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem>Thông Tin cá nhân</DropdownItem> */}
                    <Link className="nav-link" to="/persional">
                      Thông Tin cá nhân
                    </Link>
                    <Link className="nav-link" to="/changepassword">
                      Thay đổi mật khẩu
                    </Link>
                    {/* <DropdownItem to="/changepassword">
                
                        Thay đổi mật khẩu
    
                    </DropdownItem> */}
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
