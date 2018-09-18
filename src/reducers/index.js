import * as actions from "../actions";

const initialState = {
  pets: [
    {
      basic_information: {
        name: "Tina",
        species: "Llama",
        age: "2",
        id: 6
      },
      veterinary_information: {
        name: "Button's Veterinary Hospital",
        phone: "787-908-7689"
      },
      health_conditions: {
        allergies: "Grass",
        chronic_Conditions: "Invertebral disc disease"
      },
      checkups: ["April 17, 2018"],
      vaccinations: ["Rabies, 10/10/89"],
      weight_history: ["90lbs"]
    },

    {
      basic_information: {
        name: "Yoda",
        species: "Dog",
        age: "6",
        id: 7
      },
      veterinary_information: {
        name: "Button's Veterinary Hospital",
        phone: "787-908-7689"
      },
      health_conditions: {
        allergies: "Grass",
        chronic_Conditions: "Invertebral disc disease"
      },
      checkups: ["June 5, 2016"],
      vaccinations: ["DPPT, 07/10/18"],
      weight_history: ["19lbs"]
    }
  ]
};

export const petRxReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_VACCINE) {
    console.log(action);
    let pets = state.pets.map((pet, index) => {
      if (index !== action.petIndex) {
        return pet;
      }
      console.log(pet);
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
