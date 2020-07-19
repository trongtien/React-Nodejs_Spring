import React, { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderCoponent";
import Loading from "./components/loading/Loading";
import LoginComponent from "./components/login/LoginComponent";
import AlterComponent from "./components/alert/ALertComponent"
import AlterErrorComponent from "./components/alert/AlertErrorComponent"
// import SliderComponent from "./components/slider/SliderComponent";
import { statusAuthLogin } from './recoil/authState';
import { showAlert, showAlertError } from './recoil/contant.js'

const Home = lazy(() => import('./pages/home'))
const Resister = lazy(() => import('./pages/resister'))
const ChangePassword = lazy(() => import('./pages/changePassword/ChangePassword'))
const ChangePersional = lazy(() => import('./pages/changePersional/changePersional'))
const Introduction = lazy(() => import('./pages/introduction'))

function App() {

  const isShowLogin = useRecoilValue(statusAuthLogin)
  const isShowAlert = useRecoilValue(showAlert)
  const isShowAlertError = useRecoilValue(showAlertError)
  return (
    <div className="App">
      {isShowLogin === true ? (<LoginComponent />) : ("")}
      {isShowAlert === true ? (<AlterComponent />) : ("")}
      {isShowAlertError === true ? (<AlterErrorComponent />) : ("")}

      <header>
        <HeaderComponent />
      </header>

      {/* <SliderComponent /> */}
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

        {/* <Route path="/card">
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        </Route> */}
      </Switch>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
