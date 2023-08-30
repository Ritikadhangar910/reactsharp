import React, { useContext } from "react";

import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import MainHeader from "./component/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const cnt = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!cnt.isLoggedIn && <Login />}
        {cnt.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
