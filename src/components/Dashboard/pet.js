import React from "react";
import { connect } from "react-redux";
import QuickAddForm from "../QuickAddForm";
import { addVaccine, addCheckup, addWeight, addNote } from "../../actions";

export class Pet extends React.Component {
  addVaccine(id) {
    const text = this.props.reduxform.values.vaccine;
    this.props.dispatch(addVaccine(text, id));
  }

  addCheckup(id) {
    const text = this.props.reduxform.values.checkup;
    this.props.dispatch(addCheckup(text, id));
  }

  addWeight(id) {
    const text = this.props.reduxform.values.weight;
    this.props.dispatch(addWeight(text, id));
  }

  addNote(id) {
    const text = this.props.reduxform.values.note;
    this.props.dispatch(addNote(text, id));
  }

  render() {
    console.log(this.props.basic_information);
    return (
      <div>
        <div className="col-4">
          <div className="card">
            <img
              src={this.props.basic_information.photo_url}
              alt={this.props.basic_information.breed}
              className="pet-avatar"
            />
            <div className="card-content">
              <h2>{this.props.basic_information.name}</h2>
              <ul className="pet">
                <li>Breed: {this.props.basic_information.breed}</li>
                <li>Preferred Vet: {this.props.veterinary_information.name}</li>
                <li>Vet Contact: {this.props.veterinary_information.phone}</li>
                <li>Allergies: {this.props.health_conditions.allergies}</li>
                <li>
                  Chronic Conditions:{" "}
                  {this.props.health_conditions.chronic_conditions}
                </li>
                <li>Checkup History: {this.props.checkups}</li>
                <li>Vaccination Reccords: {this.props.vaccinations}</li>
                <li>Weight History: {this.props.weight_history}</li>
                <li>Notes: {this.props.notes}</li>
              </ul>
              <QuickAddForm
                petId={this.props.basic_information.id}
                type="checkup"
                onAdd={() => this.addCheckup(this.props.basic_information.id)}
              />
              <QuickAddForm
                petId={this.props.basic_information.id}
                type="vaccine"
                onAdd={() => this.addVaccine(this.props.basic_information.id)}
              />
              <QuickAddForm
                petId={this.props.basic_information.id}
                type="weight"
                onAdd={() => this.addWeight(this.props.basic_information.id)}
              />
              <QuickAddForm
                petId={this.props.basic_information.id}
                type="note"
                onAdd={() => this.addNote(this.props.basic_information.id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxform: state.form["quick-add"]
});

export default connect(mapStateToProps)(Pet);
