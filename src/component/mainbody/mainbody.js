import React from "react";
import "./mainbody.css";
import img1 from "../../assets/images/pexels-pixabay-163185.jpg";
function Mainbody() {
  return (
    <div className="main-body">
      <div className="container">
        <div className="img-cont">
          <img src={img1} alt="home-img" className="img-cont" />
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
