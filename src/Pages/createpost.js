import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase-config";
import Homepage from "./Homepage";
// import { useNavigate } from "react-router-dom";

function Createpost({ isauth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  // const navigate = useNavigate();
  const collectionposts = collection(db, "post");
  const createpost = async () => {
    await addDoc(collectionposts, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    // navigate(Homepage);
  };
  // useEffect(() => {
  //   if (!isauth) {
  //     window.location.pathname = "/Login";
  //   }
  // }, []);
  return (
    <div>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">post</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="write post"
          onChange={(event) => {
            setPost(event.target.value);
          }}
        ></textarea>
      </div>

      <button onClick={createpost}>Submit post</button>
    </div>
  );
}

export default Createpost;
