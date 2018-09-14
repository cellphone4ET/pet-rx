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
            <div className="petrx">Pet.rx </div>
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

      <div id="bottom-expo">
        Managing health records is not an easy task. Whether it be keeping track
        of your own information or someone else’s, it is way too easy to miss
        annual checkups due to disorganization and forgetfulness. After an
        international move with my dog, Yoda, it became even more apparent to me
        that there had to be a better way to store my pet’s health information
        in one easily accessible place. <br />
        <br />Out of this need, Pet.rx was born. <br />
        <br />Regardless of whether or not you have access to your past
        veterinarians and their often hard-to-decipher records of your pets
        health you can now easily store, manage, and track all your pets health
        information with ease from wherever you are with . . . <br />
        <div className="petrx petrxdiv">Pet.rx</div>
        <br />
      </div>

      <hr id="thirdline" />

      <footer>
        <div className="footerDiv">
          <p>© Erica Garcia</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;