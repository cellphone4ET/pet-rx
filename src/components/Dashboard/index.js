import React from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import NavbarDash from "../Navbar/navbar-dash";
import Pets from "./pets";
import Footer from "../Footer";
import "./index.css";

// pass down data via props here //

export function Dashboard(props) {
  return (
    <div className="mainDiv">
      <NavbarDash />
      <Pets />
      <Footer />
    </div>
  );
}

export default Dashboard;
