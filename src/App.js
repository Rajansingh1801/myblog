import React, { useState } from "react";
import "mera-mann/mmstyle.css";
// import "./App.css";
import MyRoute from "./Route/Route";
import Header from "./component/header/header";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { useNavigate } from "react-router-dom";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/Login");
    });
  };

  return (
    <div className="bg-F0F0F0">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} logout={logout} />
      <MyRoute isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default App;
