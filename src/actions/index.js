export const ADD_VACCINE = "ADD_VACCINE";
export const addVaccine = (vaccination, petIndex) => ({
  type: ADD_VACCINE,
  vaccination,
  petIndex
});

export const ADD_CHECKUP = "ADD_CHECKUP";
export const addCheckup = (checkup, petIndex) => ({
  type: ADD_CHECKUP,
  checkup,
  petIndex
});

export const ADD_WEIGHT = "ADD_WEIGHT";
export const addWeight = (weight, petIndex) => ({
  type: ADD_WEIGHT,
  weight,
  petIndex
});

export const ADD_PET = "ADD_PET";
export const addPet = pet => ({
  type: ADD_PET,
  pet
});

export const DELETE_PET = "DELETE_PET";
export const deletePet = petId => ({
  type: DELETE_PET,
  petId
});

export const SET_CURRENT_PET = "SET_CURRENT_PET";
export const setCurrentPet = pet => ({
  type: SET_CURRENT_PET,
  pet
});

export const EDIT_PET = "EDIT_PET";
export const editPet = (pet, petId) => ({
  type: EDIT_PET,
  pet,
  petId
});

// export const FETCH_BOARD_SUCCESS = "FETCH_BOARD_SUCCESS";
// export const fetchBoardSuccess = board => ({
//   type: FETCH_BOARD_SUCCESS,
//   board
// });
//
// export const fetchBoard = () => dispatch => {
//   return fetch("/board")
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(board => {
//       dispatch(fetchBoardSuccess(board));
//     });
// .catch(error => {
//   dispatch(fetchBoardError)
// });
// };
