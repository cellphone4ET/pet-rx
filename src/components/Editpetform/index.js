import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import NavbarDash from "../Navbar/navbar-dash";
import Footer from "../Footer";
import { editPet } from "../../actions";
import "./index.css";

export class Editpetform extends React.Component {
  onSubmit(values) {
    console.log("onsubmit", values);
    const pet = {
      basic_information: {
        name: values.basic_information.name,
        photo_url: values.basic_information.photo_url,
        breed: values.basic_information.breed,
        age: values.basic_information.age,
        notes: values.basic_information.notes,
        id: values.basic_information.id
      },
      checkups: [values.checkups],
      health_conditions: {
        allergies: values.health_conditions.allergies,
        chronic_conditions: values.health_conditions.chronic_conditions
      },
      vaccinations: [values.vaccinations],
      veterinary_information: {
        name: values.veterinary_information.name,
        phone: values.veterinary_information.phone
      },
      weight_history: [values.weight_history]
    };
    this.props.dispatch(reset("edit-pet"));
    this.props.history.push("/dashboard");
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
          <Field name="basic_information.name" component="input" />
          <br />
          <label htmlFor="basic_information.photourl">Photo URL</label>
          <Field name="basic_information.photo_url" component="input" />
          <br />
          <label htmlFor="basic_information.breed">Breed</label>
          <Field name="basic_information.breed" component="input" />
          <br />
          <label htmlFor="basic_information.age">Age</label>
          <Field name="basic_information.age" component="input" />
          <br />
          <br />
          <p>Veterinary Information</p>
          <label htmlFor="veterinary_information.name">Vet</label>
          <Field name="veterinary_information.name" component="input" />
          <br />
          <label htmlFor="veterinary_information.phone">Phone</label>
          <Field name="veterinary_information.phone" component="input" />
          <br /> <br />
          <p>Health Conditions</p>
          <label htmlFor="health_conditions.allergies">Allergies</label>
          <Field name="health_conditions.allergies" component="input" />
          <br />
          <label htmlFor="health_conditions.chronic_conditions">
            Chronic Conditions
          </label>
          <Field
            name="health_conditions.chronic_conditions"
            component="input"
          />
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
        <Footer />
      </div>
    );
  }
}

export default reduxForm({
  form: "edit-pet"
})(Editpetform);
