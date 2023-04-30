import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "./pagesstyle.css";
function Createpost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [images, setimages] = useState("");
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();
  const collectionposts = collection(db, "post");
  const [showPerc, setShowPerc] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  const newDate =
    days[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    "," +
    date.getFullYear();
  console.log(newDate);

  const createposts = async () => {
    setShowPerc(true);

    const storageRef = ref(storage, `/image/${images.name}`);
    const uploadTask = uploadBytesResumable(storageRef, images);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => {
        console.log(err);
        setShowPerc(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          await addDoc(collectionposts, {
            title,
            post,
            url,
            newDate,
            author: {
              name: auth.currentUser.displayName,
              id: auth.currentUser.uid,
              profileimage: auth.currentUser.photoURL,
              mobileNo: auth.currentUser.phoneNumber,
            },
          });
          setShowPerc(false);
          navigate("/Homepage");
        });
      }
    );
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/Homepage");
    }
  }, []);

  return (
    <div className="createPage">
      <h2 className="text-center">Create Your Blog Here!</h2>
      <div className="py-2">
        <div className="my-1">
          <label>Title</label>
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
        <div className="my-1">
          <label>Uplaod Banner Image</label>
          <input
            type="file"
            onChange={(event) => {
              setimages(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <label htmlFor="">post</label> <br />
          <textarea
            name=""
            id=""
            placeholder="write post"
            onChange={(event) => {
              setPost(event.target.value);
            }}
          ></textarea>
        </div>
        <div className="text-center">
           
          {showPerc && (
            <p>
              <em> {percent} </em>"% done"
            </p>
          )}
          <button onClick={createposts}>Submit post</button>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
