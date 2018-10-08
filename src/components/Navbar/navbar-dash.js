import React from "react";
import { Link } from "react-router-dom";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import "./navbar-dash.css";
import store from "../../store";

export default class NavbarDash extends React.Component {
  onClick() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <div className="nav2">
        <Link to="/dashboard">
          <div className="logo2">Pet.rx</div>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link to="/addpet" className="linkz">
                + add pet
              </Link>
            </li>
            <li>
              <Link to="/" className="linkz" onClick={() => this.onClick()}>
                - logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
