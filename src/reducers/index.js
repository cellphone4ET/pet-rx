import * as actions from "../actions";

const initialState = {
  pets: [
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
  ]
};

export const petRxReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_VACCINE) {
    let pets = state.pets.map((pet, index) => {
      if (index !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        vaccinations: [
          ...pet.vaccinations,
          {
            vaccination: action.vaccine
          }
        ]
      });
    });
  } else if (action.type === actions.ADD_CHECKUP) {
    let pets = state.pets.map((pet, index) => {
      if (index !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        checkups: [
          ...pet.checkups,
          {
            checkup: action.checkup
          }
        ]
      });
    });

    return Object.assign({}, state, {
      pets
    });
  }
  // else if (action.type === actions.FETCH_BOARD_SUCCESS) {
  //   return action.board;
  // }
  return state;
};
