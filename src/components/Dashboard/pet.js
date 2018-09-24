import React from "react";
import { connect } from "react-redux";
import QuickAddForm from "../QuickAddForm";
import { addVaccine, addCheckup, addWeight, deletePet } from "../../actions";

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

  deletePet(id) {
    console.log("delete pet ran");
    this.props.dispatch(deletePet(id));
  }

  render() {
    console.log(this.props.basic_information);

    const checkups = this.props.checkups.map((checkup, index) => {
      return <li key={index}>• {checkup}</li>;
    });

    const vaccinations = this.props.vaccinations.map((vaccine, index) => {
      return <li key={index}>• {vaccine}</li>;
    });

    const weight_history = this.props.weight_history.map((weight, index) => {
      return <li key={index}>• {weight}</li>;
    });

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
                    <span className="bold">Notes:</span>{" "}
                    {this.props.basic_information.notes}
                  </li>
                  <img
                    src="https://image.flaticon.com/icons/svg/1083/1083206.svg"
                    onClick={() =>
                      this.deletePet(this.props.basic_information.id)
                    }
                    className="delete-pet"
                    alt="delete-icon"
                  />
                  <br />
                  <li>
                    <span className="bold">Checkup History:</span>{" "}
                    <ul>{checkups}</ul>
                  </li>
                  <li>
                    <span className="bold">Vaccination Records:</span>{" "}
                    <ul>{vaccinations}</ul>
                  </li>
                  <li>
                    <span className="bold">Weight History:</span>{" "}
                    <ul>{weight_history}</ul>
                  </li>
                </ul>
              </div>
              <hr id="pet-hr" />
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
