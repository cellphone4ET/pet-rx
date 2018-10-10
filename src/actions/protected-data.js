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

// export const ADD_PET = "ADD_PET";
// export const addPet = pet => ({
//   type: ADD_PET,
//   pet
// });

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

export const addPet = values => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      basic_information: {
        name: values.basic_information.name,
        photo_url: values.basic_information.photo_url,
        breed: values.basic_information.breed,
        age: values.basic_information.age,
        notes: values.basic_information.notes
      },
      checkups: [values.checkups],
      health_conditions: {
        allergies: values.health_conditions.allergies,
        chronic_conditions: values.health_conditions.chronic_conditions
      },
      id: values.id,
      vaccinations: [values.vaccinations],
      veterinary_information: {
        name: values.veterinary_information.name,
        phone: values.veterinary_information.phone
      },
      weight_history: [values.weight_history]
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};
