import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import { connect } from "react-redux";
import RequiresLogin from "../../requires-login";
import NavbarDash from "../../page-components/Navbar/navbar-dash";
import Footer from "../../page-components/Footer";
import { editPet } from "../../../actions/protected-data";

export class Editpetformm extends React.Component {
  componentDidMount() {
    this.props.initialize({
      name: this.props.currentPet.name,
      photo_url: this.props.currentPet.photo_url,
      breed: this.props.currentPet.breed,
      age: this.props.currentPet.age,
      vet_name: this.props.currentPet.vet_name,
      phone: this.props.currentPet.phone,
      allergies: this.props.currentPet.allergies,
      chronic_conditions: this.props.currentPet.chronic_conditions,
      checkups: this.props.currentPet.checkups,
      weight_history: this.props.currentPet.weight_history,
      vaccinations: this.props.currentPet.vaccinations,
      notes: this.props.currentPet.notes,
      id: this.props.currentPet.id
    });
  }

  onSubmit(values) {
    const pet = {
      name: values.name,
      photo_url: values.photo_url,
      breed: values.breed,
      age: values.age,
      notes: values.notes,
      checkups: values.checkups,
      allergies: values.allergies,
      chronic_conditions: values.chronic_conditions,
      id: this.props.currentPet.id,
      vaccinations: [values.vaccinations],
      vet_name: values.vet_name,
      phone: values.phone,
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
            <label className="label" htmlFor="vet_name">
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
let EditPetForm = reduxForm({
  form: "initializeFromState",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Editpetformm);

const mapStateToProps = state => ({
  pets: state.protectedData.pets,
  currentPet: state.protectedData.currentPet,
  loggedIn: state.auth.currentUser !== null
});

export default RequiresLogin()(connect(mapStateToProps)(EditPetForm));
