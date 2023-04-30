import React from "react";
import { useLocation } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();
  const data = location.state.postContent;
  return (
    <div className="BlogDeatil">
      <div className="text-center container">
        <h1 className="pb-1">{data.title}</h1>
        <div className="banner-img">
          <img src={data.url} />
        </div>
        <h5>{data.newDate}</h5>
        <p className="py-1 blog-p">{data.post}</p>
        <div className="my-2 author-details"></div>
      </div>
    </div>
  );
}

export default BlogDetails;
