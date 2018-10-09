import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { refreshAuthToken } from "../actions/auth";
import LandingPage from "./Landing/";
import Dashboard from "./Dashboard";
import Editpetform from "./Editpetform";
import AddPetForm from "./AddPetForm";
import SignUp from "./SignUp";
import Login from "./Login";

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addpet" component={AddPetForm} />
        <Route exact path="/editpet" component={Editpetform} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={LandingPage} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
