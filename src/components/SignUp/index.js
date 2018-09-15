import React from "react";
import { Field, reduxForm, focus } from "redux-form";
// import { registerUser } from "../actions/users";
// import { login } from "../actions/auth";
import { Link } from "react-router-dom";
import Input from "../Input";
import NavbarLoginSignUp from "../Navbar/navbar-login-signup";
import Footer from "../Footer";
import "./index.css";
// import { required, nonEmpty, matches, length, isTrimmed } from "../validators";
// const passwordLength = length({ min: 10, max: 72 });
// const matchesPassword = matches("password");

export class SignUp extends React.Component {
  onSubmit(values) {
    // const {username, password, firstName, lastName} = values;
    // const user = {username, password, firstName, lastName};
    // return this.props
    //     .dispatch(registerUser(user))
    //     .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div>
        <NavbarLoginSignUp />
        <div id="form-div">
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="firstName">First name</label>
            <Field component={Input} type="text" name="firstName" />
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              // validate={[required, nonEmpty, isTrimmed]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              // validate={[required, passwordLength, isTrimmed]}
            />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              // validate={[required, nonEmpty, matchesPassword]}
            />

            <Link to="/dashboard">
              <button>Sign Up</button>
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(SignUp);
