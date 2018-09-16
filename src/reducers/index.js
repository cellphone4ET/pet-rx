import * as actions from "../actions";

const initialState = {
  pets: []
};

export const petRxReducer = (state = initialState, action) => {
  // ADD_VACCINE ACTION REDUCER
  let pets = state.pets.map((pet, index) => {
    if (index !== action.petIndex) {
      return pet;
    }
    return Object.assign({}, pet, {
      vaccination_history: [
        ...pet.vaccine,
        {
          text: action.text
        }
      ]
    });
  });

  return Object.assign({}, state, {
    pets
  });

  // ADDCHECKUP ACTION REDUCER
  // } else if (action.type === actions.ADD_CHECKUP) {
  //   let pets = state.pets.map((pet, index) => {
  //     if (index !== action.petIndex) {
  //       return pet;
  //     }
  //     return Object.assign({}, pet, {
  //       cards: [
  //         ...list.cards,
  //         {
  //           text: action.text
  //         }
  //       ]
  //     });
  //   });
  //
  //   return Object.assign({}, state, {
  //     lists
  //   });
  // }
  // else if (action.type === actions.FETCH_BOARD_SUCCESS) {
  //   return action.board;
  // }
  // return state;
};
