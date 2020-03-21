import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Detail from "./Details";
import { useState, useEffect } from "react";
import Logout from "../Components/Logout";
function Navbar(props) {
  const [fragment, setfragment] = useState();
  const [isAuth, setisAuth] = useState("");
  const user = useSelector(state => state.auth.isAuthenticated);
  useEffect(() => {
    setisAuth(user);
  });

  return (
    <nav
      className="navbar navbar-dark bg-dark d-flex align-items-end "
      style={{ color: "azure" }}
    >
      <Link style={{ color: "azure" }} to="/">
        {" "}
        <h1>doggy</h1>
      </Link>

      <div style={{ cursor: "pointer", color: "white" }}>
        {isAuth ? <Logout /> : null}
      </div>
    </nav>
  );
}

export default connect(null, null)(withRouter(Navbar));
