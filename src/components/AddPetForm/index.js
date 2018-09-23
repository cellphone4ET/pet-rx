import React from "react";
import NavbarDash from "../Navbar/navbar-dash";
import Footer from "../Footer";
import { reduxForm, Field, reset } from "redux-form";
import "./index.css";
import { addPet } from "../../actions";

export class AddPetForm extends React.Component {
  onSubmit(values) {
    console.log("onsubmit", values);
    const pet = {
      basic_information: {
        name: values.name,
        photo_url: values.photo_url,
        breed: values.breed,
        age: values.age,
        id: values.id
      },
      veterinary_information: {
        name: values.name,
        phone: values.phone
      },
      health_conditions: {
        allergies: values.allergies,
        chronic_conditions: values.chronic_conditions
      },
      checkups: [values.chornic_conditions],
      vaccinations: [values.vaccinations],
      weight_history: [values.weight_history],
      notes: [values.notes]
    };
    this.props.dispatch(addPet(pet));
    this.props.dispatch(reset("add-pet"));
    // this.props.history.push("/dashboard");
  }

  addPet() {}

  render() {
    return (
      <div>
        <NavbarDash />
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <p>Basic Info</p>
          <br />
          <label htmlFor="pet.basic_information.name">Name</label>
          <Field name="pet.basic_information.name" component="input" />
          <br />
          <label htmlFor="pet.basic_information.photo-url">Photo URL</label>
          <Field name="pet.basic_information.photo-url" component="input" />
          <br />
          <label htmlFor="pet.basic_information.breed">Breed</label>
          <Field name="pet.basic_information.breed" component="input" />
          <br />
          <label htmlFor="pet.basic_information.age">Age</label>
          <Field name="pet.basic_information.age" component="input" />
          <br />
          <br />
          <p>Veterinary Information</p>
          <label htmlFor="pet.veterinary_information.name">Vet</label>
          <Field name="pet.veterinary_information.name" component="input" />
          <br />
          <label htmlFor="pet.veterinary_information.phone">Phone</label>
          <Field name="pet.veterinary_information.phone" component="input" />
          <br /> <br />
          <p>Health Conditions</p>
          <label htmlFor="pet.health_conditions.allergies">Allergies</label>
          <Field name="pet.health_conditions.allergies" component="input" />
          <br />
          <label htmlFor="pet.health_conditions.chronic_conditions">
            Chronic Conditions
          </label>
          <Field
            name="pet.health_conditions.chronic_conditions"
            component="input"
          />
          <br />
          <br />
          <label htmlFor="pet.checkups">Checkup History</label>
          <Field name="pet.checkups" component="input" />
          <br />
          <label htmlFor="pet.vaccinations">Vaccination History</label>
          <Field name="pet.vaccinations" component="input" />
          <br />
          <label htmlFor="pet.weight_history">Weight History</label>
          <Field name="pet.weight_history" component="input" />
          <br />
          <br />
          <label htmlFor="pet.notes">Notes</label>
          <Field name="pet.notes" component="input" />
          <br />
          <br />
          <button type="submit">Create Pet</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default reduxForm({
  form: "add-pet"
})(AddPetForm);
