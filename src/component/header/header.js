import React from "react";
import "./header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Header({ isAuth, setIsAuth, logout }) {
  return (
    <div>
      <nav>
        <div>
          <Link to="Homepage">Home</Link>
          <Link to="Login">Login</Link>
          <Link to="Createpost">Createpost</Link>

          {/* {!isAuth ? (
            <Link to="/Login">Login</Link>
          ) : (
            <>
              <Link to="/Createpost">Createpost</Link>
              <Link onClick={logout}>Logout</Link>
            </>
          )} */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
