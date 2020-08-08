import React, { lazy, Suspense, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderCoponent";
import Loading from "./components/loading/Loading";
import LoginComponent from "./components/login/LoginComponent";
import AlterComponent from "./components/alert/ALertComponent"
import AlterErrorComponent from "./components/alert/AlertErrorComponent"
import FastComponent from './components/fast'
import SliderComponent from "./components/slider/SliderComponent";
import { statusAuthLogin } from './recoil/authState';
import { showAlert, showAlertError } from './recoil/contant.js'
import { listProductState, pagination } from './recoil/product.js'
import { listCategoryState } from './recoil/category.js'
import productApi from './api/productApi'
import categoryApi from './api/categoryApi'

import Home from "./pages/home"
// import ProductDetailts from './pages/productDetail'

const Resister = lazy(() => import('./pages/resister'))
const ChangePassword = lazy(() => import('./pages/changePassword/ChangePassword'))
const ChangePersional = lazy(() => import('./pages/changePersional/changePersional'))
const Introduction = lazy(() => import('./pages/introduction'))
const ProductCategory = lazy(() => import('./pages/productCategory/index'))
const ProductDetailts = lazy(() => import('./pages/productDetail'))
const Card = lazy(() => import('./pages/card'))

function App(props) {
  const [scrolled, setScrolled] = useState(false)
  const setListProductState = useSetRecoilState(listProductState)
  const setListCategory = useSetRecoilState(listCategoryState)
  const isShowLogin = useRecoilValue(statusAuthLogin)
  const isShowAlert = useRecoilValue(showAlert)
  const isShowAlertError = useRecoilValue(showAlertError)
  const paginational = useRecoilValue(pagination)

  React.useEffect(() => {
    window.addEventListener('scroll', handlScroll)
    async function getAllProduct() {
      try {
        let resData = await productApi.getAll(paginational._limit, paginational._page)
        let { data } = resData

        await setListProductState(data)
      } catch (error) {
        return error.message
      }
    }

    getAllProduct()
  }, [])

  React.useEffect(() => {
    async function getAllCategory() {
      try {
        let category = await categoryApi.getAll()
        let { data } = category
        await setListCategory(data)
      } catch (error) {
        return error.message
      }
    }
    getAllCategory()
  }, [])

  /*  */
  const handlScroll = () => {
    let offect = window.scrollY;

    if (offect > 110) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }

  return (
    <div className="App">
      {isShowLogin === true ? (<LoginComponent />) : ("")}
      {isShowAlert === true ? (<AlterComponent />) : ("")}
      {isShowAlertError === true ? (<AlterErrorComponent />) : ("")}
      {scrolled === true ? (<FastComponent />) : ("")}

      <header>
        <HeaderComponent
          scrolled={scrolled}
        />
      </header>

      <SliderComponent />
      <Switch>

        <Route exact path="/">
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </Route>

        <Route exact path="/Introduction">
          <Suspense fallback={<Loading />}>
            <Introduction />
          </Suspense>
        </Route>

        <Route path="/register">
          <Suspense fallback={<Loading />}>
            <Resister />
          </Suspense>
        </Route>

        <Route path="/persional">
          <Suspense fallback={<Loading />}>
            <ChangePersional />
          </Suspense>
        </Route>

        <Route path="/changepassword">
          <Suspense fallback={<Loading />}>
            <ChangePassword />
          </Suspense>
        </Route>

        <Route path="/product/:productId">
          <Suspense fallback={<Loading />}>
            <ProductDetailts />
          </Suspense>
        </Route>

        <Route path="/category/:category_id">
          <Suspense fallback={<Loading />}>
            <ProductCategory />
          </Suspense>
        </Route>

        <Route path="/card">
          <Suspense fallback={<Loading />}>
            <Card />
          </Suspense>
        </Route>
      </Switch>
      <footer>
        <FooterComponent />
      </footer>
    </div >
  );
}

export default App;
