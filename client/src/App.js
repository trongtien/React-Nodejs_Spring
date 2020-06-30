import React, { useState } from "react";
import HeaderComponent from "./components/Header/HeaderConponent";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  function handleLoginClick() {
    let newShowLogin = isShowLogin;
    if (newShowLogin === undefined) return;
    setIsShowLogin(!newShowLogin);
  }
  return (
    <div className="App">
      <HeaderComponent onClickLogin={handleLoginClick} />
    </div>
  );
}

export default App;
