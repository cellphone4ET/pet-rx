import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./navbar.css";


export default function Navbar(props) {

  // componentDidMount() {
  //   // When the user scrolls the page, execute myFunction
  //   window.onscroll = function() {myFunction()}
  //   // Get the header
  //   var header = document.getElementById("myHeader")
  //   // Get the offset position of the navbar
  //   var sticky = header.offsetTop
  //   // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  //   function myFunction() {
  //     if (window.pageYOffset > sticky) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   };

// }
  return (

    <div className="nav header" id="myHeader">
    	<div className="logo">Pet.rx</div>
      <button className="button"><Link to="/signup">Get Started</Link></button>
    </div>
  );
}
