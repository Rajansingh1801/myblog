// import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Pages/login";
import Homepage from "../Pages/Homepage";
import Createpost from "../Pages/createpost";
function MyRoute({ isauth, setIsAuth }) {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Homepage" exact component={Homepage} />
        <Route path="/Login" exact component={Login} setIsAuth={setIsAuth} />
        <Route
          path="/createpost"
          exact
          component={Createpost}
          isauth={isauth}
        />
      </Switch>
    </>
  );
}
export default MyRoute;
