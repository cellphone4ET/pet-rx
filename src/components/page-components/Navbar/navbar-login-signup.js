import React from "react";
import { Link } from "react-router-dom";
import "./navbar-login-signup.css";

export default function NavbarLoginSignUp(props) {
  //
  return (
    <div className="nav header1" id="myHeader">
      <Link to="/">
        <div className="logo">Pet.rx</div>
      </Link>
    </div>
  );
}
