import React from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import NavbarDash from "../Navbar/navbar-dash";
import Footer from "../Footer";
import "./index.css";

export function SinglePetView(props) {
  return (
    <div className="mainDivDash">
      <NavbarDash />
      <Footer />
    </div>
  );
}

export default SinglePetView;
