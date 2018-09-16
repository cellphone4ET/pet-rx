import * as actions from "../actions";

const initialState = {
  pets: []
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
