import React from "react";
import "./bloglist.css";
import { Link, useNavigate } from "react-router-dom";

function Bloglist({ postContent }) {
  const navigate = useNavigate();
  const clickhandler = () => {
    navigate("/blogdetails", { state: { postContent: postContent } });
  };
  return (
    <div className="blog-list">
      <div className="container">
        <div className="blog-img">
          <img src={postContent.url} alt="blogimg" className="blogimg" />
        </div>
        <hr className="my-1" />
        <div className="d-flex align-items-center justify-content-between mt-1 ">
          <div className="d-flex align-items-center">
            <img
              src={postContent.author.profileimage}
              alt="profile-img"
              className="profile-img"
            />
            <h4 className="ps-1">{postContent.author.name}</h4>
          </div>
          <div>
            <p>{postContent.newDate}</p>
          </div>
        </div>

        <h2 className="py-1">{postContent.title}</h2>

        <div>
          <button className="viewbtn" onClick={clickhandler}>
            View Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
