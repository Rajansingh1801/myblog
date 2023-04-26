import React, { useState } from "react";
import "./App.css";
import MyRoute from "./Route/Route";
import Header from "./component/header/header";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
// import { useNavigate } from "react-router-dom";
import Login from "./Pages/login";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  // const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      // navigate(Login);
    });
  };

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} logout={logout} />
      <MyRoute isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default App;
