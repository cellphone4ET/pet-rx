import * as actions from "../actions";

const initialState = {
  pets: [
    {
      basic_information: {
        name: "Winston",
        photo_url:
          "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&s=d68543202e54ab0235f6d1defcc4dfe7&auto=format&fit=crop&w=1275&q=80",
        breed: "pug",
        age: "2",
        id: 0
      },
      veterinary_information: {
        name: "Button's Veterinary Hospital",
        phone: "787-908-7689"
      },
      health_conditions: {
        allergies: "Grass",
        chronic_conditions: "Invertebral disc disease"
      },
      checkups: ["April 17, 2018"],
      vaccinations: ["Rabies, 10/10/89"],
      weight_history: ["90lbs"],
      notes: ["likes squirrels"]
    },

    {
      basic_information: {
        name: "Toby",
        photo_url:
          "https://images.unsplash.com/photo-1529933037705-0d537317ae7b?ixlib=rb-0.3.5&s=bf61e5fdfe6ed04654062c9afd8324c0&auto=format&fit=crop&w=1271&q=80",
        breed: "alley cat",
        age: "6",
        id: 1
      },
      veterinary_information: {
        name: "Button's Veterinary Hospital",
        phone: "787-908-7689"
      },
      health_conditions: {
        allergies: "Grass",
        chronic_conditions: "ear infections"
      },
      checkups: ["June 5, 2016"],
      vaccinations: ["DPPT, 07/10/18"],
      weight_history: ["19lbs"],
      notes: ["likes catnip"]
    },

    {
      basic_information: {
        name: "Squeaky",
        photo_url:
          "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37bb70209e862ea907fc1d2a80daadd1&auto=format&fit=crop&w=1355&q=80",
        breed: "hampster",
        age: "1",
        id: 2
      },
      veterinary_information: {
        name: "Button's Veterinary Hospital",
        phone: "787-908-7689"
      },
      health_conditions: {
        allergies: "none",
        chronic_conditions: "none"
      },
      checkups: ["February 17, 2018"],
      vaccinations: ["hampster-virus, 11/10/17"],
      weight_history: [".5bs"],
      notes: ["likes runnning on his wheel"]
    }
  ]
};

export const petRxReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_VACCINE) {
    let pets = state.pets.map(pet => {
      if (pet.basic_information.id !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        vaccinations: [...pet.vaccinations, action.vaccination]
      });
    });
    return Object.assign({}, state, { pets });
  } else if (action.type === actions.ADD_CHECKUP) {
    let pets = state.pets.map(pet => {
      if (pet.basic_information.id !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        checkups: [...pet.checkups, action.checkup]
      });
    });
    return Object.assign({}, state, {
      pets
    });
  } else if (action.type === actions.ADD_WEIGHT) {
    let pets = state.pets.map(pet => {
      if (pet.basic_information.id !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        weight_history: [...pet.weight_history, action.weight]
      });
    });
    return Object.assign({}, state, {
      pets
    });
  } else if (action.type === actions.ADD_NOTE) {
    let pets = state.pets.map(pet => {
      if (pet.basic_information.id !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        notes: [...pet.notes, action.note]
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
