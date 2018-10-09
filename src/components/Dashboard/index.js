import React from "react";
import { connect } from "react-redux";
import NavbarDash from "../Navbar/navbar-dash";
import RequiresLogin from "../requires-login";
import Pets from "./pets";

import "./index.css";

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="mainDivDash">
        <NavbarDash />
        <Pets />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    pets: state.protectedData.data
  };
};

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));
