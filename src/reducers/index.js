import * as actions from "../actions";

const initialState = {
  pets: [
    {
      basic_information: {
        name: "Winston",
        photo_url:
          "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&s=d68543202e54ab0235f6d1defcc4dfe7&auto=format&fit=crop&w=1275&q=80",
        breed: "Pug",
        age: "2",
        notes: "Does not like to be left alone",
        id: 0
      },
      veterinary_information: {
        name: "Button's Veterinary Hospital",
        phone: "787-908-7689"
      },
      health_conditions: {
        allergies: "Pollen",
        chronic_conditions: "Invertebral disc disease"
      },
      checkups: ["April 17, 2018"],
      vaccinations: ["Rabies, 10/10/89"],
      weight_history: ["90lbs"]
    },

    {
      basic_information: {
        name: "Aburrido",
        photo_url:
          "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&auto=format&fit=crop&w=1234&q=80",
        breed: "Alley cat",
        age: "6",
        notes: "likes catnip",
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
      weight_history: ["19lbs"]
    },

    {
      basic_information: {
        name: "Ears",
        photo_url:
          "https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6953c6f70087b9e4de75a37cec9afe9&auto=format&fit=crop&w=1284&q=80",
        breed: "Angora",
        age: "1",
        notes: "likes digging in the garden for carrots",
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
      vaccinations: ["bunny-virus, 11/10/17"],
      weight_history: ["5lbs"]
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
  } else if (action.type === actions.ADD_PET) {
    return Object.assign({}, state, {
      pets: [...state.pets, action.pet]
    });
  } else if (action.type === actions.DELETE_PET) {
    let pets = state.pets.filter(
      pet => action.petId !== pet.basic_information.id
    );
    return Object.assign({}, state, {
      pets
    });
  } else if (action.type === actions.EDIT_PET) {
    let pets = state.pets.map(pet => {
      if (pet.basic_information.id !== action.petIndex) {
        return pet;
      }
      return Object.assign({}, pet, {
        pet: [...state.pet, action.pet]
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
