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
              <div className="displayed-info">
                <h2 class="name">{this.props.basic_information.name}</h2>
                <ul className="pet">
                  <li>
                    <span className="bold">Breed:</span>{" "}
                    {this.props.basic_information.breed}
                  </li>
                  <li>
                    <span className="bold">Preferred Vet:</span>{" "}
                    {this.props.veterinary_information.name}
                  </li>
                  <li>
                    <span className="bold">Vet Contact:</span>{" "}
                    {this.props.veterinary_information.phone}
                  </li>
                  <li>
                    <span className="bold">Allergies:</span>{" "}
                    {this.props.health_conditions.allergies}
                  </li>
                  <li>
                    <span className="bold">Chronic Conditions:</span>{" "}
                    {this.props.health_conditions.chronic_conditions}
                  </li>
                  <li>
                    <span className="bold">Checkup History:</span>{" "}
                    {this.props.checkups}
                  </li>
                  <li>
                    <span className="bold">Vaccination Reccords:</span>{" "}
                    {this.props.vaccinations}
                  </li>
                  <li>
                    <span className="bold">Weight History:</span>{" "}
                    {this.props.weight_history}
                  </li>
                  <li>
                    <span className="bold">Notes:</span> {this.props.notes}
                  </li>
                </ul>
              </div>
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
