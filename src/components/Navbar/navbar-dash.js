import React from "react";
import { Link } from "react-router-dom";
import "./navbar-dash.css";

export default function NavbarDash(props) {
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
            <Link to="/logout" className="linkz">
              - logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
