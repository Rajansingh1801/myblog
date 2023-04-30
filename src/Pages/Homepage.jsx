import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Bloglist from "../component/bloglist/bloglist";
import Mainbody from "../component/mainbody/mainbody";

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
    <>
      <Mainbody />
      <div className="d-flex justify-content-between mt-4 flex-wrap w-100 bg-F0F0F0">
        {postData.map((postContent) => {
          return <Bloglist postContent={postContent} />;
        })}
      </div>
    </>
  );
}

export default Homepage;
