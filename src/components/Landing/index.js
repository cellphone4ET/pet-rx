import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "./index.css";
import "./navbar.css";
import "./float-grid.css";

export function LandingPage(props) {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="landingHeader">Pet.rx</h1>
      </div>

      <Navbar />

      <div className="threebasics content">
        <div id="main-statement">
          <p>
            <span id="main-statment-span">
              Take control of your pets health with
              <br />
            </span>
            <div id="petrx">Pet.rx</div>
          </p>
          <img
            className="pawimage"
            src="https://image.flaticon.com/icons/svg/87/87979.svg"
            alt="paw prints"
          />
        </div>

        <hr id="firstline" />

        <div className="col-4">
          <div className="card">
            <img
              className="card-image"
              src="https://image.flaticon.com/icons/svg/88/88007.svg"
              alt="vaccine icon"
            />
            <div className="card-content">
              <h2>Your Pets Health</h2>
              <p>
                Can’t remember the last time your pet had their rabies
                vaccination? How about the last time they went to the vet?{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <img
              className="card-image"
              src="https://image.flaticon.com/icons/svg/87/87973.svg"
              alt="clipboard icon"
            />
            <div className="card-content">
              <h2>Save and Track</h2>
              <p>
                Pet.rx helps you organize and track your pet’s health
                information in a convenient and accessible way so you can get
                back to spending more of your time with your four-legged family
                member.
              </p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <img
              className="card-image"
              src="https://image.flaticon.com/icons/svg/88/88003.svg"
              alt="pethouse"
            />
            <div className="card-content">
              <h2>Let Pet.rx Work For You</h2>
              <p>
                With the ability to track vaccination records, weight, chronic
                conditions, amongst other things across time you’ll never be
                left wondering
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottombuttonsbox">
        <button className="bottombuttons">Demo</button>
        <button className="bottombuttons">Sign Up</button>
      </div>
    </div>
  );
}

export default LandingPage;
