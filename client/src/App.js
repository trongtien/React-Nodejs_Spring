import React, { useState } from "react";

import HeaderComponent from "./components/header/HeaderCoponent";
import LoginComponent from "./components/login/LoginComponent";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  function handleLoginClick() {
    let newShowLogin = isShowLogin;
    if (newShowLogin === undefined) return;
    setIsShowLogin(!newShowLogin);
  }

  function onClickCloseLogin() {
    let newIsShowLogin = isShowLogin;
    if (newIsShowLogin === undefined) return;
    setIsShowLogin(!newIsShowLogin);
  }
  return (
    <div className="App">
      {isShowLogin === true ? (<LoginComponent hanldeClickClose={onClickCloseLogin} />) : ("")}
      <HeaderComponent onClickLogin={handleLoginClick} />
    </div>
  );
}

export default App;
