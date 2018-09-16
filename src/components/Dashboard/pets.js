import React from "react";
import Pet from "./pet";

let petsArray = [
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
  }
];

let renderedPetsArray = petsArray.map(pet => <Pet {...pet} />);

export default function Pets(props) {
  return (
    <div>
      <h1>Your pets</h1>
      {renderedPetsArray}
    </div>
  );
}
