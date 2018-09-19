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

export const ADD_NOTE = "ADD_NOTE";
export const addNote = (note, petIndex) => ({
  type: ADD_NOTE,
  note,
  petIndex
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