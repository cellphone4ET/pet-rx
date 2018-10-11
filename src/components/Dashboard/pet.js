import React from "react";
import { connect } from "react-redux";
import QuickAddForm from "../QuickAddForm";
import { Link } from "react-router-dom";
import {
  addVaccine,
  addCheckup,
  addWeight,
  deletePet,
  setCurrentPet
} from "../../actions/protected-data";

//pet componenet renders each individual pet, data passed down from parent pets component
export class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  //sets whether the extended info tab has been clicked or not, default false
  setOpen(open) {
    this.setState({
      open
    });
  }

  //setcurrent pet only necessary for edit of entire pet, not for quick-addPet
  //of vaccine, weight, checkup history
  setCurrentPet(currentPetId) {
    this.props.dispatch(setCurrentPet(currentPetId));
  }

  addVaccine(pet) {
    const text = this.props.reduxform.values.vaccine;
    this.props.dispatch(addVaccine(text, pet));
  }

  addCheckup(pet) {
    const text = this.props.reduxform.values.checkup;
    this.props.dispatch(addCheckup(text, pet));
  }

  addWeight(pet) {
    const text = this.props.reduxform.values.weight;
    this.props.dispatch(addWeight(text, pet));
  }

  deletePet(id) {
    let result = window.confirm(`Are you sure you want to delete this pet?`);
    if (result) {
      this.props.dispatch(deletePet(id));
    }
  }

  render() {
    const checkups = this.props.pet.checkups.map((checkup, index) => {
      return <li key={index}>• {checkup}</li>;
    });

    const vaccinations = this.props.pet.vaccinations.map((vaccine, index) => {
      return <li key={index}>• {vaccine}</li>;
    });

    const weight_history = this.props.pet.weight_history.map(
      (weight, index) => {
        return <li key={index}>• {weight}</li>;
      }
    );

    //if not set to open, limited info option renders
    if (!this.state.open) {
      return (
        <div>
          <div className="col-4">
            <div className="card">
              <img
                src={this.props.pet.photo_url}
                alt={this.props.pet.breed}
                className="pet-avatar"
              />
              <div className="card-content">
                <div className="displayed-info">
                  <h2 className="name">{this.props.pet.name}</h2>

                  <div className="petdiv">
                    <ul className="pet">
                      <li>
                        <span className="bold">Breed:</span>{" "}
                        {this.props.pet.breed}
                      </li>
                      <li>
                        <span className="bold">Age:</span> {this.props.pet.age}
                      </li>
                      <li>
                        <span className="bold">Preferred Vet:</span>{" "}
                        {this.props.pet.vet_name}
                      </li>
                      <li>
                        <span className="bold">Vet Contact:</span>{" "}
                        {this.props.pet.phone}
                      </li>
                      <li>
                        <span className="bold">Allergies:</span>{" "}
                        {this.props.pet.allergies}
                      </li>
                      <li>
                        <span className="bold">Chronic Conditions:</span>{" "}
                        {this.props.pet.chronic_conditions}
                      </li>
                      <li>
                        <span className="bold">Notes:</span>{" "}
                        {this.props.pet.notes}
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

    //extended info option when set to open === true
    return (
      <div>
        <div className="col-4">
          <div className="card cardd">
            <img
              src={this.props.pet.photo_url}
              alt={this.props.pet.breed}
              className="pet-avatar"
            />
            <div className="card-content">
              <div className="displayed-info">
                <h2 className="name">{this.props.pet.name}</h2>

                <ul className="pet">
                  <li>
                    <span className="bold">Breed:</span> {this.props.pet.breed}
                  </li>
                  <li>
                    <span className="bold">Age:</span> {this.props.pet.age}
                  </li>
                  <li>
                    <span className="bold">Preferred Vet:</span>{" "}
                    {this.props.pet.vet_name}
                  </li>
                  <li>
                    <span className="bold">Vet Contact:</span>{" "}
                    {this.props.pet.phone}
                  </li>
                  <li>
                    <span className="bold">Allergies:</span>{" "}
                    {this.props.pet.allergies}
                  </li>
                  <li>
                    <span className="bold">Chronic Conditions:</span>{" "}
                    {this.props.pet.chronic_conditions}
                  </li>
                  <li>
                    <span className="bold">Notes:</span> {this.props.pet.notes}
                  </li>
                  <hr id="pet-hr" />
                  <div className="histories">
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
                  </div>
                </ul>
              </div>

              <QuickAddForm
                petid={this.props.id}
                type="checkup"
                onAdd={() => this.addCheckup(this.props.pet)}
              />
              <QuickAddForm
                petid={this.props.id}
                type="vaccine"
                onAdd={() => this.addVaccine(this.props.pet)}
              />
              <QuickAddForm
                petid={this.props.id}
                type="weight"
                onAdd={() => this.addWeight(this.props.pet)}
              />
              <div className="delete-edit-buttons">
                <div
                  onClick={() => this.deletePet(this.props.pet.id)}
                  className="delete-edit-pet"
                >
                  Delete
                </div>

                <Link to="/editpet">
                  <div
                    petid={this.props.pet.id}
                    className="delete-edit-pet"
                    onClick={() => this.setCurrentPet(this.props.pet)}
                  >
                    Edit{" "}
                  </div>
                </Link>
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
  reduxform: state.form["quick-add"],
  currentPet: state.protectedData.currentPetId
});

export default connect(mapStateToProps)(Pet);
