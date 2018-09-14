import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import LandingPage from "./Landing/";
import Dashboard from "./Dashboard";
import AddPet from "./AddPet";
import SignUp from "./SignUp";
import Login from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addpet" component={AddPet} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={LandingPage} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
