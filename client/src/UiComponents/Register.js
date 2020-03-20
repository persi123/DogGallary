import React from "react";
import "./Register.css";

export default function login(props) {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* <div className="fadeIn first">
          <img
            src="http://danielzawadzki.com/codepen/01/icon.svg"
            id="icon"
            alt="User Icon"
          />
        </div> */}
        <h2>Register User</h2>
        <form onSubmit={props.submit}>
          <input
            type="text"
            id="name"
            className="fadeIn second"
            name="name"
            placeholder="name"
            onChange={e => props.name(e.target.value)}
          />
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Email"
            onChange={e => props.onchange(e.target.value)}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            onChange={e => props.password(e.target.value)}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
