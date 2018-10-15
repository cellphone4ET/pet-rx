import React from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";
import NavbarLanding from "../../page-components/Navbar/navbar-landing";
import Footer from "../../page-components/Footer";
import "./index.css";
import "./float-grid.css";

export class LandingPage extends React.Component {
  //when demo button clicked redirected to dashboard with demo user account
  //credentials
  handleDemo() {
    return this.props.dispatch(login("testuser1", "testing123"));
  }

  render() {
    //if logged in goes straight to dashbaord
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="home">
        <div className="hero">
          <h1 className="landingHeader">Pet.rx</h1>
        </div>
        <NavbarLanding />
        <div className="threebasics content">
          <div id="main-statement">
            <span id="main-statment-span">
              Take control of your pet's health with . . .
              <br />
            </span>
            <div className="petrx">Pet.rx </div>
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
                  can get back to spending more of your time with your
                  four-legged family member.
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
                  conditions, and other relevant metrics across time you’ll
                  never be left wondering the state of your pets health again.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottombuttonsbox">
          <button className="bottombuttons" onClick={() => this.handleDemo()}>
            Demo
          </button>

          <Link to="/signup">
            <button className="bottombuttons">Sign Up</button>
          </Link>
          <div className="signup-login-div">
            <Link to="/login">
              <span id="login">Login</span>
            </Link>
          </div>
        </div>
        <hr id="secondline" />
        <div id="bottom-expo">
          Managing health records is not an easy task. Whether it be keeping
          track of your own information or someone else’s, it is way too easy to
          miss annual checkups due to disorganization and forgetfulness. After
          an international move with my dog, Yoda, it became even more apparent
          to me that there had to be a better way to store my pet’s health
          information in one easily accessible place. <br />
          <br />Out of this need, Pet.rx was born. <br />
          <br />Regardless of whether or not you have access to your past
          veterinarians and their often hard-to-decipher records of your pets
          health you can now easily store, manage, and track all your pets
          health information with ease from wherever you are with . . . <br />
          <div className="petrx petrxdiv">Pet.rx</div>
          <br />
        </div>
        <hr id="thirdline" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
