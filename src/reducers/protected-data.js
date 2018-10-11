import * as actions from "../actions/protected-data";

const initialState = {
  data: "",
  pets: [],
  currentPet: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === actions.FETCH_PETS_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      pets: action.data,
      error: null
    });
  } else if (action.type === actions.FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });

    // } else if (action.type === actions.ADD_VACCINE) {
    //   let pets = state.pets.map(pet => {
    //     if (pet.id !== action.petIndex) {
    //       return pet;
    //     }
    //     return Object.assign({}, pet, {
    //       vaccinations: [...pet.vaccinations, action.vaccination]
    //     });
    //   });
    //   return Object.assign({}, state, { pets });
    // } else if (action.type === actions.ADD_CHECKUP) {
    //   let pets = state.pets.map(pet => {
    //     if (pet.id !== action.petIndex) {
    //       return pet;
    //     }
    //     return Object.assign({}, pet, {
    //       checkups: [...pet.checkups, action.checkup]
    //     });
    //   });
    //   return Object.assign({}, state, {
    //     pets
    //   });
    // } else if (action.type === actions.ADD_WEIGHT) {
    //   let pets = state.pets.map(pet => {
    //     if (pet.id !== action.petIndex) {
    //       return pet;
    //     }
    //     return Object.assign({}, pet, {
    //       weight_history: [...pet.weight_history, action.weight]
    //     });
    //   });
    //   return Object.assign({}, state, {
    //     pets
    //   });
  } else if (action.type === actions.SET_CURRENT_PET) {
    return Object.assign({}, state, {
      currentPet: action.pet
    });
  }
  return state;
}
