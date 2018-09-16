import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
import QuickAddform from "../Quickaddform";
import { addVaccine, addCheckup } from "../../actions";

let pets = [
  {
    basic_information: {
      name: "Tina",
      species: "Dog",
      age: "2"
    },
    veterinary_information: {
      name: "Button's Veterinary Hospital",
      phone: "787-908-7689"
    },
    health_conditions: {
      allergies: "Grass",
      chronic_Conditions: "Invertebral disc disease"
    },
    checkups: {
      checkup: "fhsdif",
      checkup_history: []
    },
    vaccinations: {
      vaccination: "Rabies, 10/10/89",
      vaccination_history: []
    },
    weight: {
      current_weight: "90",
      weight_history: []
    }
  },

  {
    basic_information: {
      name: "Yoda",
      species: "Dog",
      age: "6"
    },
    veterinary_information: {
      name: "Button's Veterinary Hospital",
      phone: "787-908-7689"
    },
    health_conditions: {
      allergies: "Grass",
      chronic_Conditions: "Invertebral disc disease"
    },
    checkups: {
      checkup: "fhsdif",
      checkup_history: []
    },
    vaccinations: {
      vaccination: "Rabies, 10/10/89",
      vaccination_history: []
    },
    weight: {
      current_weight: "90",
      weight_history: []
    }
  }
];

export class Pets extends React.Component {
  addVaccine(vaccine) {
    this.props.dispatch(addVaccine(vaccine, this.props.index));
  }

  addCheckup(checkup) {
    this.props.dispatch(addCheckup(checkup, this.props.index));
  }

  render() {
    const renderedPets = pets.map((pet, index) => (
      <li key={index}>
        <Pet {...pet} />
        <QuickAddform
          type="checkup"
          onAdd={checkup => this.addCheckup(checkup)}
        />
        <QuickAddform
          type="vaccine"
          onAdd={vaccine => this.addVaccine(vaccine)}
        />
      </li>
    ));

    return (
      <div>
        <h1>Your pets</h1>
        <br />
        <ul>{renderedPets}</ul>
      </div>
    );
  }
}

export default connect()(Pets);
