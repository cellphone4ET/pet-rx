import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../Input";
import Footer from "../Footer";
import NavbarLoginSignUp from "../Navbar/navbar-login-signup";
import "./index.css";
import { login } from "../../actions/auth";
import { required, nonEmpty } from "../../validators";

export class Loginn extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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

    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    //
    return (
      <div>
        <NavbarLoginSignUp />
        <div id="form-div-login">
          <p className="login-signup-banner">Login</p>
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
              validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
            />

            <button
              className="login-signup-button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Submit
            </button>

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

const Login = reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(Loginn);

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);
