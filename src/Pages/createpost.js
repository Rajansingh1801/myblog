import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

function Createpost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [images, setimages] = useState("");
  const [url, seturl] = useState("");
  const navigate = useNavigate();
  const collectionposts = collection(db, "post");
  const [percent, setPercent] = useState(0);

  const createposts = async () => {
    //for images uplaod

    const storageRef = ref(storage, `/image/${images.name}`);
    const uploadTask = uploadBytesResumable(storageRef, images);

    uploadTask.on(
      "state_changed",
      // (snapshot) => {
      //   const percent = Math.round(
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //   ); // update progress
      //   setPercent(percent);
      // },
      // (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          await addDoc(collectionposts, {
            title,
            post,
            url,
            author: {
              name: auth.currentUser.displayName,
              id: auth.currentUser.uid,
              profileimage: auth.currentUser.photoURL,
              mobileNo: auth.currentUser.phoneNumber,
            },
          });
        });
      }
    );

    // uploadTask.on("state_changed", () => {
    //   getDownloadURL(uploadTask.ref).then((url) => {
    //     console.log(url);
    //   });
    // });

    navigate("/Homepage");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/Homepage");
    }
  }, []);

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
        <input
          type="file"
          onChange={(event) => {
            setimages(event.target.files[0]);
          }}
        />
         <p>{percent} "% done"</p>
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

      <button onClick={createposts}>Submit post</button>
    </div>
  );
}

export default Createpost;
