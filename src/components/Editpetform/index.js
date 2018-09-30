import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import { connect } from "react-redux";
import NavbarDash from "../Navbar/navbar-dash";
import Footer from "../Footer";
import { editPet } from "../../actions";
import "./index.css";

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
      notes: this.props.currentPet.basic_information.notes
    });
  }

  onSubmit(values) {
    const pet = {
      basic_information: {
        name: values.first_name,
        photo_url: values.photo_url,
        breed: values.breed,
        age: values.age,
        notes: values.notes,
        id: this.props.currentPet.basic_information.id
      },
      checkups: [values.checkups],
      health_conditions: {
        allergies: values.allergies,
        chronic_conditions: values.chronic_conditions
      },
      vaccinations: [values.vaccinations],
      veterinary_information: {
        name: values.name,
        phone: values.phone
      },
      weight_history: [values.weight_history]
    };
    console.log(pet);
    const petId = this.props.currentPet.basic_information.id;
    this.props.dispatch(editPet(pet, petId));
    this.props.dispatch(reset("edit-pet"));
    // this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <NavbarDash />
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <p>Basic Info</p>
          <br />
          <label htmlFor="basic_information.name">Name</label>
          <Field name="first_name" component="input" />
          <br />
          <label htmlFor="basic_information.photo_url">Photo URL</label>
          <Field name="photo_url" component="input" />
          <br />
          <label htmlFor="basic_information.breed">Breed</label>
          <Field name="breed" component="input" />
          <br />
          <label htmlFor="basic_information.age">Age</label>
          <Field name="age" component="input" />
          <br />
          <br />
          <p>Veterinary Information</p>
          <label htmlFor="veterinary_information.name">Vet</label>
          <Field name="name" component="input" />
          <br />
          <label htmlFor="veterinary_information.phone">Phone</label>
          <Field name="phone" component="input" />
          <br /> <br />
          <p>Health Conditions</p>
          <label htmlFor="health_conditions.allergies">Allergies</label>
          <Field name="allergies" component="input" />
          <br />
          <label htmlFor="health_conditions.chronic_conditions">
            Chronic Conditions
          </label>
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
          <button type="submit">Edit Pet</button>
        </form>
        <Footer />
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
