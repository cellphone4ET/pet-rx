import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../Input";
import Footer from "../Footer";
import NavbarLoginSignUp from "../Navbar/navbar-login-signup";
import "./index.css";
// import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';

export class Login extends React.Component {
  onSubmit(values) {
    console.log("hi");
    // return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div>
        <NavbarLoginSignUp />
        <div id="form-div">
          <p id="login-banner">Login</p>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              // validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              // validate={[required, nonEmpty]}
            />
            <Link to="/dashboard">
              <button id="login-button">Submit</button>
            </Link>
            <br />
            <br />
            {error}
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(Login);
