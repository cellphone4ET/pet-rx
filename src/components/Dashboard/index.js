import React from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import Navbar2 from "./navbar2";
import Pets from "./pets";
import "./index.css";

// pass down data via props here //

export function Dashboard(props) {
  return (
    <div className="mainDiv">
      <Navbar2 />
      <Pets />
    </div>
  );
}

export default Dashboard;
