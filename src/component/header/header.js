import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/MyBlogs.png";

function Header({ isAuth, logout }) {
  return (
    <div>
      <nav>
        <div className="container d-flex justify-content-between">
          <div>
            <img src={img1} alt="img" />
          </div>
          <div>
            <Link to="Homepage">Home</Link>
            <Link>About Us</Link>
            <Link>Contact us</Link>

            {!isAuth ? (
              <Link to="/Login">Login</Link>
            ) : (
              <>
                <Link to="/Createpost">Createpost</Link>
                <Link onClick={logout}>Logout</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
