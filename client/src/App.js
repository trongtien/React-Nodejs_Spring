import React from "react";
import { useRecoilValue } from 'recoil'
import { statusAuthLogin } from './recoil/auth/authState'
import HeaderComponent from "./components/header/HeaderCoponent";
import LoginComponent from "./components/login/LoginComponent";

function App() {

  const isShowLogin = useRecoilValue(statusAuthLogin)

  return (
    <div className="App">
      {isShowLogin === true ? (<LoginComponent />) : ("")}
      <header>
        <HeaderComponent />
      </header>
    </div>
  );
}

export default App;
