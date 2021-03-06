import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from 'js-cookie';
// import Icons from "../../contants/icon";
import {
  Button, Collapse,
  DropdownMenu, DropdownToggle,
  Input, InputGroup, InputGroupAddon, Nav, Navbar,
  NavbarBrand, NavbarToggler, Form,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { clearLocalStorageUser, isLogin, statusAuthLogin, useInfo } from '../../recoil/authState';
// import productAPI from './../../api/productApi'
import { productPageHome } from "./../../recoil/product"
import { listCategoryState } from '../../recoil/category';
import "./style.scss";


function HeaderComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dataProduct = useRecoilValue(productPageHome)
  const [AuthFormLogin, setAuthFormLogin] = useRecoilState(statusAuthLogin);
  const [isLoginUser, setisLoginUser] = useRecoilState(isLogin);
  const setUserInfo = useSetRecoilState(useInfo);
  const listCategory = useRecoilValue(listCategoryState);
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeOutRef = React.useRef(null)

  const toggle = () => setIsOpen(!isOpen);

  const handlClicLogin = () => {
    setAuthFormLogin(!AuthFormLogin)
  }

  const handlLogOut = async () => {
    let url = window.location
    await clearLocalStorageUser()
    let updateStatususe = isLoginUser
    await setisLoginUser(!updateStatususe)
    let UserInfo = " "
    await setUserInfo(UserInfo)
    if (url.pathname === '/persional' || url.pathname === '/changepassword' || url.pathname === '/pay') {
      props.history.push('/')
    }
    window.location.reload();
  }

  function handlSerachTermChange(event) {
    const value = event.target.value
    setSearchTerm(value)
    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current)
    }

    typingTimeOutRef.current = setTimeout(() => {
      console.log(searchTerm)
    }, 300)

  }


  return (
    <div>
      <Navbar light expand="lg" className={props.scrolled === true ? "fixed-top" : ""}>
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
                Sản Phẩm
              </DropdownToggle>
              <DropdownMenu right>
                {
                  listCategory === undefined ? "" :
                    listCategory.map(item => {
                      return (
                        <Link className="nav-link"
                          to={`/category/${item.category_id}`}
                          key={item.category_id}
                        >
                          {item.name}
                        </Link>
                      )
                    })
                }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Form className="search">
            <InputGroup >
              <Input type="text" value={searchTerm} onChange={handlSerachTermChange} />
              {/* <InputGroupAddon addonType="append">
                <Button color="secondary">Search</Button>
              </InputGroupAddon> */}
            </InputGroup>
          </Form>



          <Nav className="mr-right" navbar>
            <NavItem>
              <Link className="nav-link" to="/card">
                Giỏ hàng
              </Link>
            </NavItem>
            {
              Cookies.get('name') ?
                ""
                :
                <NavItem>
                  <Link className="nav-link" to="/register">
                    Đăng ký
                  </Link>
                </NavItem>
            }
            {
              // isLoginUser === false ?
              Cookies.get('name') ?
                ""
                :
                <NavItem>
                  <Link className="nav-link" onClick={() => handlClicLogin()}>
                    Đăng Nhập
                    </Link>
                </NavItem>
            }
            {
              // isLoginUser === true ?
              Cookies.get('name') ?
                <UncontrolledDropdown nav inNavbar className="isLogin">
                  <DropdownToggle nav caret>
                    {Cookies.get('name')}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link className="nav-link" to="/persional">
                      Thông Tin cá nhân
                    </Link>
                    <Link className="nav-link" to="/changepassword">
                      Thay đổi mật khẩu
                    </Link>
                    <Link className="nav-link" to="/userCard">
                      Đơn hàng
                    </Link>
                    <Link className="nav-link" onClick={() => handlLogOut()}>
                      Đăng Xuất
                    </Link>
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

export default withRouter(HeaderComponent);
