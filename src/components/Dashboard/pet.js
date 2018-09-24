import React from "react";
import { connect } from "react-redux";
import QuickAddForm from "../QuickAddForm";
import { addVaccine, addCheckup, addWeight, deletePet } from "../../actions";

//pet componenet renders each individual pet;
//its state is passed down from pets component;
//the quickadd form is connected to this component;

export class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.onAdd();
    this.setEditing(false);
  }

  setOpen(open) {
    this.setState({
      open
    });
    console.log("set open ran");
  }

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
    let result = window.confirm(`Are you sure you want to delete this pet?`);
    if (result) {
      this.props.dispatch(deletePet(id));
    }
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

    if (!this.state.open) {
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
                  <h2 className="name">{this.props.basic_information.name}</h2>

                  <div className="petdiv">
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
                    </ul>
                  </div>

                  <img
                    src="https://image.flaticon.com/icons/svg/32/32195.svg"
                    alt="expand"
                    className="expand-icon"
                    onClick={() => this.setOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="col-4">
          <div className="card cardd">
            <img
              src={this.props.basic_information.photo_url}
              alt={this.props.basic_information.breed}
              className="pet-avatar"
            />
            <div className="card-content">
              <div className="displayed-info">
                <h2 className="name">{this.props.basic_information.name}</h2>

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
                  <br />
                  <div>
                    <li>
                      <span className="bold">Checkup History:</span>{" "}
                      <ul>{checkups}</ul>
                    </li>
                  </div>
                  <div>
                    <li>
                      <span className="bold">Vaccination Records:</span>{" "}
                      <ul>{vaccinations}</ul>
                    </li>
                  </div>
                  <div>
                    <li>
                      <span className="bold">Weight History:</span>{" "}
                      <ul>{weight_history}</ul>
                    </li>
                  </div>
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
              <div className="delete-edit-buttons">
                <div
                  onClick={() =>
                    this.deletePet(this.props.basic_information.id)
                  }
                  className="delete-edit-pet"
                >
                  Delete
                </div>

                <div className="delete-edit-pet">Edit </div>
              </div>

              <img
                src="https://image.flaticon.com/icons/svg/32/32323.svg"
                alt="expand"
                className="expand-icon"
                onClick={() => this.setOpen(false)}
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
