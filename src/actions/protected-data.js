import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

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

//////////////////////////////////////////

export const FETCH_PETS_SUCCESS = "FETCH_PETS_SUCCESS";
export const fetchPetsSuccess = data => ({
  type: FETCH_PETS_SUCCESS,
  data
});

export const FETCH_ERROR = "FETCH_ERROR";
export const fetchError = error => ({
  type: FETCH_ERROR,
  error
});

export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets`, {
    method: "GET",
    headers: {
      // Provide auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchPetsSuccess(data)))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

// export const fetchProtectedData = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/protected`, {
//     method: "GET",
//     headers: {
//       // Provide our auth token as credentials
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(({ data }) => dispatch(fetchProtectedDataSuccess(data)))
//     .catch(err => {
//       dispatch(fetchProtectedDataError(err));
//     });
// };
