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
              Take control of your pets health with . . .
              <br />
            </span>
            <div id="petrx">Pet.rx </div>
          </p>
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
                When was the last time your pet went to the vet? How about the
                date of their most recent rabies vaccination? Can't remember?
                <br />You're not alone.
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
                Pet.rx helps you organize your pet’s health information so you
                can get back to spending more of your time with your four-legged
                family member.
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
                conditions, and other relevant metrics across time you’ll never
                be left wondering the state of your pets health again.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottombuttonsbox">
        <button className="bottombuttons">Demo</button>
        <button className="bottombuttons">Sign Up</button>
        <div className="signup-login-div">
          <Link to="/login">Login</Link>
        </div>
      </div>

      <hr id="secondline" />

      <footer>
        <div className="footerDiv">© Erica Garcia</div>
      </footer>
    </div>
  );
}

export default LandingPage;
