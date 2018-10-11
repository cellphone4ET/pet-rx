import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

// export const ADD_VACCINE = "ADD_VACCINE";
// export const addVaccine = (vaccination, petIndex) => ({
//   type: ADD_VACCINE,
//   vaccination,
//   petIndex
// });

// export const ADD_CHECKUP = "ADD_CHECKUP";
// export const addCheckup = (checkup, petIndex) => ({
//   type: ADD_CHECKUP,
//   checkup,
//   petIndex
// });

// export const ADD_WEIGHT = "ADD_WEIGHT";
// export const addWeight = (weight, petIndex) => ({
//   type: ADD_WEIGHT,
//   weight,
//   petIndex
// });

// export const DELETE_PET = "DELETE_PET";
// export const deletePet = petId => ({
//   type: DELETE_PET,
//   petId
// });

export const SET_CURRENT_PET = "SET_CURRENT_PET";
export const setCurrentPet = pet => ({
  type: SET_CURRENT_PET,
  pet
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
      name: values.name,
      photo_url: values.photo_url,
      breed: values.breed,
      age: values.age,
      notes: values.notes,
      checkups: [values.checkups],
      allergies: values.allergies,
      chronic_conditions: values.chronic_conditions,
      vaccinations: [values.vaccinations],
      vet_name: values.vet_name,
      phone: values.phone,
      weight_history: [values.weight_history],
      id: values.id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const editPet = (values, currentPet) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${values.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      name: values.name,
      photo_url: values.photo_url,
      breed: values.breed,
      age: values.age,
      notes: values.notes,
      checkups: [values.checkups],
      allergies: values.allergies,
      chronic_conditions: values.chronic_conditions,
      vaccinations: [values.vaccinations],
      vet_name: values.vet_name,
      phone: values.phone,
      weight_history: [values.weight_history],
      id: values.id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const deletePet = petId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${petId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const addWeight = (text, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      weight_history: text,
      id: id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const addVaccine = (text, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      vaccine_history: [text],
      id: id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const addCheckup = (text, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      checkup_history: [text],
      id: id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};
