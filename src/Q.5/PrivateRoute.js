import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <div>
      <h2>Special Page</h2>
      <p>This page is only accessible to authorized users.</p>
    </div>
  );
};

export default PrivateRoute;
