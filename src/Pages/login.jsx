import React from "react";
import { auth, provider } from "../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>login</h1>
      <p>Signin here</p>
      <button onClick={siginwithGoogle}>Signin with Google</button>
    </div>
  );
}

export default Login;
