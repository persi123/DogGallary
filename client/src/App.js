import React from "react";
import "./App.css";
import Register from "./Components/Register";
import store from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import { loadUser } from "./action/authAction";
import Logout from "./Components/Logout";

function App(props) {
  const [isAuth, setisAuth] = useState("");
  const user = useSelector(state => state.auth.isAuthenticated);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    setisAuth(user);
  });

  useEffect(() => {
    ToDetails();
  }, [isAuth]);

  const ToDetails = () => {
    if (isAuth) {
      // return <Redirect to="/details" />;
      props.history.push("/home");
      console.log(isAuth);
    } else {
      props.history.push("/");
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/details" exact component={Details} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </div>
  );
}

export default connect(null, null)(withRouter(App));
