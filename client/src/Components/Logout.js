import React from "react";
import { logout } from "../action/authAction";
import { useEffect } from "react";
import { connect } from "react-redux";
import PropsTypes from "prop-types";
import { withRouter } from "react-router";

function Logout(props) {
  useEffect(() => {
    // props.logout();

    console.log("logout");
  }, []);

  // useEffect(() => {}, []);

  const LOgoutSession = () => {
    props.history.push("/");
    props.logout();
  };
  console.log(props);
  Logout.propTypes = {
    logout: PropsTypes.func.isRequired
  };
  return (
    <>
      <h5 onClick={LOgoutSession}>Logout</h5>
    </>
  );
}

export default connect(null, { logout })(withRouter(Logout));
