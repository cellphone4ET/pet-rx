import React from "react";
import NavbarDash from "../Navbar/navbar-dash";
import Footer from "../Footer";
import RequiresLogin from "../requires-login";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import "./index.css";
import { addPet } from "../../actions/protected-data";

export class AddPetFormm extends React.Component {
  onSubmit(values) {
    console.log("onsubmit", values);
    const pet = {
      name: values.name,
      photo_url: values.photo_url,
      breed: values.breed,
      age: values.age,
      notes: values.notes,
      checkups: [values.checkups],
      allergies: values.allergies,
      chronic_conditions: values.chronic_conditions,
      id: values.id,
      vaccinations: [values.vaccinations],
      vet_name: values.vet_name,
      phone: values.phone,
      weight_history: [values.weight_history]
    };
    this.props.dispatch(addPet(pet));
    this.props.dispatch(reset("add-pet"));
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <NavbarDash />
        <div className="edit-add-div">
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <h2>Basic Info</h2>
            <label className="label" htmlFor="name">
              Name
            </label>
            <Field name="name" component="input" className="edit-add-input" />
            <br />
            <label className="label" htmlFor="photo_url">
              Photo URL
            </label>
            <Field
              name="photo_url"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="breed">
              Breed
            </label>
            <Field name="breed" component="input" className="edit-add-input" />
            <br />
            <label className="label" htmlFor="age">
              Age
            </label>
            <Field name="age" component="input" className="edit-add-input" />
            <br />
            <br />
            <h2>Veterinary Information</h2>
            <label className="label" htmlFor="name">
              Vet
            </label>
            <Field
              name="vet_name"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <Field name="phone" component="input" className="edit-add-input" />
            <br /> <br />
            <h2>Health Conditions</h2>
            <label className="label" htmlFor="allergies">
              Allergies
            </label>
            <Field
              name="allergies"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="chronic_conditions">
              Chronic Conditions
            </label>
            <Field
              name="chronic_conditions"
              component="input"
              className="edit-add-input"
            />
            <br /> <br />
            <hr className="formhr" />
            <br />
            <br />
            <label className="label" htmlFor="notes">
              <span className="bold">Notes</span>
            </label>
            <br />
            <Field
              name="notes"
              component="textarea"
              className="edit-add-input inputsize"
            />
            <br />
            <label className="label" htmlFor="checkups">
              <span className="bold">Checkups</span>
            </label>
            <br />
            <Field
              name="checkups"
              component="textarea"
              className="edit-add-input inputsize"
            />
            <br />
            <label className="label" htmlFor="vaccinations">
              <span className="bold">Vaccinations</span>
            </label>
            <br />
            <Field
              name="vaccinations"
              component="textarea"
              className="edit-add-input inputsize"
            />
            <br />
            <label className="label" htmlFor="weight_history">
              <span className="bold">Weight History</span>
            </label>
            <br />
            <Field
              name="weight_history"
              component="textarea"
              className="edit-add-input inputsize"
            />
            <br />
            <br />
            <div className="submit-edit-pet-button-div">
              <button className="submit-edit-pet-button" type="submit">
                Create Pet
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const AddPetForm = reduxForm({
  form: "add-pet"
})(AddPetFormm);

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default RequiresLogin()(connect(mapStateToProps)(AddPetForm));
