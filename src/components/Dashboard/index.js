import React from "react";
import NavbarDash from "../Navbar/navbar-dash";
import Pets from "./pets";

import "./index.css";

export function Dashboard(props) {
  return (
    <div className="mainDivDash">
      <NavbarDash />
      <Pets />
    </div>
  );
}

export default Dashboard;
