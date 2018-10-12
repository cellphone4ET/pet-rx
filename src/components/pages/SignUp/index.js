import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../../actions/users";
import { login } from "../../../actions/auth";
import Input from "../../page-components/Input";
import Footer from "../../page-components/Footer";
import { Redirect } from "react-router-dom";
import NavbarLoginSignUp from "../../page-components/Navbar/navbar-login-signup";
import "./index.css";
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../../../validators";
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class SignUpp extends React.Component {
  onSubmit(values) {
    const { username, password } = values;
    const user = { username, password };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    // user is automatically signed in if user authentication passes
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <NavbarLoginSignUp />
        <div id="form-div-signup">
          <p className="login-signup-banner">Signup</p>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
            />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
            />

            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
              className="login-signup-button"
              id="sign-up-button"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const SignUp = reduxForm({
  form: "signup",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(SignUpp);

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);
