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
      basic_information: {
        name: values.basic_information.name,
        photo_url: values.basic_information.photo_url,
        breed: values.basic_information.breed,
        age: values.basic_information.age,
        notes: values.basic_information.notes
      },
      checkups: [values.checkups],
      health_conditions: {
        allergies: values.health_conditions.allergies,
        chronic_conditions: values.health_conditions.chronic_conditions
      },
      id: values.id,
      vaccinations: [values.vaccinations],
      veterinary_information: {
        name: values.veterinary_information.name,
        phone: values.veterinary_information.phone
      },
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
            <label className="label" htmlFor="basic_information.name">
              Name
            </label>
            <Field
              name="basic_information.name"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="basic_information.photo_url">
              Photo URL
            </label>
            <Field
              name="basic_information.photo_url"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="basic_information.breed">
              Breed
            </label>
            <Field
              name="basic_information.breed"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="basic_information.age">
              Age
            </label>
            <Field
              name="basic_information.age"
              component="input"
              className="edit-add-input"
            />
            <br />
            <br />
            <h2>Veterinary Information</h2>
            <label className="label" htmlFor="veterinary_information.name">
              Vet
            </label>
            <Field
              name="veterinary_information.name"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="veterinary_information.phone">
              Phone
            </label>
            <Field
              name="veterinary_information.phone"
              component="input"
              className="edit-add-input"
            />
            <br /> <br />
            <h2>Health Conditions</h2>
            <label className="label" htmlFor="health_conditions.allergies">
              Allergies
            </label>
            <Field
              name="health_conditions.allergies"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label
              className="label"
              htmlFor="health_conditions.chronic_conditions"
            >
              Chronic Conditions
            </label>
            <Field
              name="health_conditions.chronic_conditions"
              component="input"
              className="edit-add-input"
            />
            <br /> <br />
            <hr className="formhr" />
            <br />
            <br />
            <label className="label" htmlFor="checkups">
              <span className="bold">Checkup History</span>
            </label>
            <Field
              name="checkups"
              component="textarea"
              className="edit-add-input inputsize"
            />
            <br />
            <label className="label" htmlFor="vaccinations">
              <span className="bold">Vaccination History</span>
            </label>
            <Field
              name="vaccinations"
              component="textarea"
              className="edit-add-input inputsize"
            />
            <br />
            <label className="label" htmlFor="weight_history">
              <span className="bold">Weight History</span>
            </label>
            <Field
              name="weight_history"
              component="textarea"
              className="edit-add-input inputsize"
            />
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
