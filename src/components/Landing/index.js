import React from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import Navbar from "./navbar";
import "./index.css";
import "./navbar.css";

export function LandingPage(props) {
  return (

    <div className="home">
    	<div className="hero">
      	<h1 className="landingHeader">Pet.rx</h1>
      </div>

      <Navbar />

      <div className="highlights content">
      	<div className="section">
      		<h2>When was the last time Fido went to the vet?</h2>
      		<p>Can’t remember the last time your pet had their rabies vaccination?  How about the last time they went to the vet? </p>
      	</div>
      	<div className="section">
      		<h2>Responsible products</h2>
      		<p>Affogato man bun iPhone poke you probably havent heard of them beard keffiyeh street art kinfolk raw denim retro aesthetic lo-fi.</p>
      	</div>
      	<div className="section">
      		<h2>Doing our part</h2>
      		<p>Affogato man bun iPhone poke you probably havent heard of them beard keffiyeh street art kinfolk raw denim retro aesthetic lo-fi.</p>
      	</div>
      </div>
    </div>
  );
}

export default LandingPage;
