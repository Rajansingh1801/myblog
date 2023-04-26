// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/login";
import Homepage from "../Pages/Homepage";
import Createpost from "../Pages/createpost";
function MyRoute({ isauth, setIsAuth }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<Createpost isauth={isauth} />} />
      </Routes>
    </>
  );
}
export default MyRoute;
