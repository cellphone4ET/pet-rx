import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import { connect } from "react-redux";
import NavbarDash from "../Navbar/navbar-dash";
import Footer from "../Footer";
import { editPet } from "../../actions/protected-data";

export class Editpetform extends React.Component {
  componentDidMount() {
    this.props.initialize({
      first_name: this.props.currentPet.basic_information.name,
      photo_url: this.props.currentPet.basic_information.photo_url,
      breed: this.props.currentPet.basic_information.breed,
      age: this.props.currentPet.basic_information.age,
      name: this.props.currentPet.veterinary_information.name,
      phone: this.props.currentPet.veterinary_information.phone,
      allergies: this.props.currentPet.health_conditions.allergies,
      chronic_conditions: this.props.currentPet.health_conditions
        .chronic_conditions,
      checkups: this.props.currentPet.checkups,
      weight_history: this.props.currentPet.weight_history,
      vaccinations: this.props.currentPet.vaccinations,
      notes: this.props.currentPet.basic_information.notes,
      id: this.props.currentPet.id
    });
  }

  onSubmit(values) {
    const pet = {
      basic_information: {
        name: values.first_name,
        photo_url: values.photo_url,
        breed: values.breed,
        age: values.age,
        notes: values.notes
      },
      checkups: [values.checkups],
      health_conditions: {
        allergies: values.allergies,
        chronic_conditions: values.chronic_conditions
      },
      id: this.props.currentPet.id,
      vaccinations: [values.vaccinations],
      veterinary_information: {
        name: values.name,
        phone: values.phone
      },
      weight_history: [values.weight_history]
    };
    const petId = this.props.currentPet.id;
    this.props.dispatch(editPet(pet, petId));
    this.props.dispatch(reset("edit-pet"));
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
              name="first_name"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="basic_information.photo_url">
              Photo URL
            </label>
            <Field
              name="photo_url"
              component="input"
              className="edit-add-input"
            />
            <br />
            <label className="label" htmlFor="basic_information.breed">
              Breed
            </label>
            <Field name="breed" component="input" className="edit-add-input" />
            <br />
            <label className="label" htmlFor="basic_information.age">
              Age
            </label>
            <Field name="age" component="input" className="edit-add-input" />
            <br />
            <br />
            <h2>Veterinary Information</h2>
            <label className="label" htmlFor="veterinary_information.name">
              Vet
            </label>
            <Field name="name" component="input" className="edit-add-input" />
            <br />
            <label className="label" htmlFor="veterinary_information.phone">
              Phone
            </label>
            <Field name="phone" component="input" className="edit-add-input" />
            <br /> <br />
            <h2>Health Conditions</h2>
            <label className="label" htmlFor="health_conditions.allergies">
              Allergies
            </label>
            <Field
              name="allergies"
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
              name="chronic_conditions"
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
                Edit Pet
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

let InitializeFromStateForm = reduxForm({
  form: "initializeFromState",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Editpetform);

InitializeFromStateForm = connect(state => ({
  pets: state.pets.pets,
  currentPet: state.pets.currentPet
}))(InitializeFromStateForm);

export default InitializeFromStateForm;
