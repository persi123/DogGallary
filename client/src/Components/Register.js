import React from "react";
import RegisterModal from "../UiComponents/Register";
import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { register } from "../action/authAction";
import { withRouter, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";

function Register(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [isAuth, setisAuth] = useState("");
  const user = useSelector(state => state.auth.isAuthenticated);
  //   useDebugName("email");

  const [password, setpassword] = useState("");
  const [submitData, setsubmitData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // const propTypes = {
  //   isAuthenticated: PropTypes.bool

  // };

  useEffect(() => {
    props.register(submitData);
  }, [submitData]);

  useEffect(() => {
    setisAuth(user);
  });

  useEffect(() => {
    ToDetails();
  }, [isAuth]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    setsubmitData({ name, email, password });

    console.log(submitData.name);

    // setisAuthenticated()

    console.log(props);
  };

  const ToDetails = () => {
    if (isAuth) {
      props.history.push("/home");
      console.log(isAuth);
    }
  };

  return (
    <div>
      <RegisterModal
        onchange={setemail}
        name={setname}
        password={setpassword}
        submit={handleSubmit}
      />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   };
// };

export default connect(null, { register })(withRouter(Register));
