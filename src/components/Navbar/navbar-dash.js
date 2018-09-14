import React from "react";
import { Link } from "react-router-dom";
import "./navbar-dash.css";

export default function NavbarDash(props) {
  return (
    <div className="nav2">
      <div className="logo2">Pet.rx</div>
      <div className="links">
        <ul>
          <li>
            <Link to="/addpet">+ add pet</Link>
          </li>
          <li>
            <Link to="/logout">- logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
