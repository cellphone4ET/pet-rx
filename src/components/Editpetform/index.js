import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import NavbarDash from "../Navbar/navbar-dash";
// import Footer from "../Footer";
// import { editPet } from "../../actions";
import "./index.css";

const name = "";
export class Editpetform extends React.Component {
  componentWillMount() {
    this.props.initialize({
      name: this.props.currentPet.basic_information.name,
      photo: this.props.currentPet.basic_information.photo_url,
      breed: this.props.currentPet.basic_information.breed,
      age: this.props.currentPet.basic_information.age,
      vet: this.props.currentPet.veterinary_information.name,
      phone: this.props.currentPet.veterinary_information.phone,
      allergies: this.props.currentPet.health_conditions.allergies,
      chronic_conditions: this.props.currentPet.health_conditions
        .chronic_conditions,
      checkups: this.props.currentPet.checkups,
      weight_history: this.props.currentPet.weight_history,
      vaccinations: this.props.currentPet.vaccinations,
      notes: this.props.currentPet.basic_information.notes
    });
  }

  render() {
    //this works and prints the current pet to the console: {basic_information: {…}, veterinary_information: {…}, health_conditions: {…}, checkups: Array(1), vaccinations: Array(1), …}
    let pet = this.props.currentPet;
    console.log(pet); //this does not work and gives the error TypeError: Cannot read property 'name' of undefined

    return (
      <div>
        <NavbarDash />
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <p>Basic Info</p>
          <br />
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" />
          <br />
          <label htmlFor="photo">Photo URL</label>
          <Field name="photo" component="input" />
          <br />
          <label htmlFor="breed">Breed</label>
          <Field name="breed" component="input" />
          <br />
          <label htmlFor="age">Age</label>
          <Field name="age" component="input" />
          <br />
          <br />
          <p>Veterinary Information</p>
          <label htmlFor="vet">Vet</label>
          <Field name="vet" component="input" />
          <br />
          <label htmlFor="phone">Phone</label>
          <Field name="phone" component="input" />
          <br /> <br />
          <p>Health Conditions</p>
          <label htmlFor="allergies">Allergies</label>
          <Field name="allergies" component="input" />
          <br />
          <label htmlFor="chronic_conditions">Chronic Conditions</label>
          <Field name="chronic_conditions" component="input" />
          <br />
          <br />
          <label htmlFor="checkups">Checkup History</label>
          <Field name="checkups" component="input" />
          <br />
          <label htmlFor="vaccinations">Vaccination History</label>
          <Field name="vaccinations" component="input" />
          <br />
          <label htmlFor="weight_history">Weight History</label>
          <Field name="weight_history" component="input" />
          <br />
          <br />
          <label htmlFor="notes">Notes</label>
          <Field name="notes" component="input" />
          <br />
          <br />
          <button type="submit">Create Pet</button>
        </form>
      </div>
    );
  }
}

let InitializeFromStateForm = reduxForm({
  form: "initializeFromState",
  enableReinitialize: true
})(Editpetform);

InitializeFromStateForm = connect(state => ({
  pets: state.pets.pets,
  currentPet: state.pets.currentPet
}))(InitializeFromStateForm);

export default InitializeFromStateForm;
