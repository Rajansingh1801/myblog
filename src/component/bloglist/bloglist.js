import React from "react";
import "./bloglist.css";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

function Bloglist({ postContent }) {
  const navigate = useNavigate();
  const clickhandler = () => {
    navigate("/blogdetails", { state: { postContent: postContent } });
  };
  const deletePost = async (id) => {
    const postDocs = doc(db, "postContent", id);
    await deleteDoc(postDocs);
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

        <div className="viewbtnCont d-flex justify-content-between w-100 align-items-center">
          <button className="viewbtn" onClick={clickhandler}>
            View Blog
          </button>
          <button
            className="delbtn"
            onClick={() => {
              deletePost(postContent.id);
            }}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
