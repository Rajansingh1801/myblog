import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { getDocs, collection, doc } from "firebase/firestore";

function Homepage() {
  const [postData, setPostData] = useState([]);
  const collectionposts = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collectionposts);
      setPostData(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    };
    getPosts();
  }, []);
  return (
    <div>
      {postData.map((postContent) => {
        return (
          <div>
            <p>{postContent.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
