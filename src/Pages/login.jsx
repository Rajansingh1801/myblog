import React from "react";
import { auth, provider } from "../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/images/login.jpg";
import logo from "../assets/images/Google_2011_logo.png";

import "./pagesstyle.css";
function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const siginwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isauth", true);
      setIsAuth(true);
      navigate("/Homepage");
    });
  };

  return (
    <div className="login">
      <div className="container position-relative bg-gray">
        <div>
          <img src={loginimg} alt="login img" />
        </div>
        <div className="position-absolute logCont">
          <div className="text-center">
            <h1>Login With</h1>
            <div>
              <img src={logo} className="logo-img" />
            </div>
            <button onClick={siginwithGoogle}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
