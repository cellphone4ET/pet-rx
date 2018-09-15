import React from "react";
import { Link } from "react-router-dom";
import "./navbar-landing.css";

export default class NavbarLanding extends React.Component {
  componentDidMount() {
    // code for sticky navbar on landingpage
    window.onscroll = myFunction;
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <div className="nav header" id="myHeader">
        <div className="logo1">Pet.rx</div>

        <Link to="/signup">
          <button className="button">Get started!</button>
        </Link>
      </div>
    );
  }
}
