import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const SET_CURRENT_PET = "SET_CURRENT_PET";
export const setCurrentPet = pet => ({
  type: SET_CURRENT_PET,
  pet
});

export const CLEAR_PETS = "CLEAR_PETS";
export const clearPets = () => ({
  type: CLEAR_PETS
});

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

export const SET_LOADING = "SET_LOADING";
export const setLoading = () => ({
  type: SET_LOADING
});

export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchPetsSuccess(data));
    })
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
      allergies: values.allergies,
      chronic_conditions: values.chronic_conditions,
      vet_name: values.vet_name,
      phone: values.phone,
      id: values.id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const deletePet = pet => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
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

export const addWeight = (text, pet) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  pet.weight_history.push(text);
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      weight_history: pet.weight_history,
      id: pet.id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const addVaccine = (text, pet) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  pet.vaccinations.push(text);
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      vaccinations: pet.vaccinations,
      id: pet.id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const addCheckup = (text, pet) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  pet.checkups.push(text);
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      checkups: pet.checkups,
      id: pet.id
    })
  })
    .then(data => dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export const deleteCheckup = (pet, index) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  pet.checkups.splice(index);
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      checkups: pet.checkups,
      id: pet.id
    })
  })
    .then(dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};
export const deleteWeight = (pet, index) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  pet.weight_history.splice(index);
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      weight_history: pet.weight_history,
      id: pet.id
    })
  })
    .then(dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};
export const deleteVaccination = (pet, index) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  pet.vaccinations.splice(index);
  return fetch(`${API_BASE_URL}/pets/${pet.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      vaccinations: pet.vaccinations,
      id: pet.id
    })
  })
    .then(dispatch(fetchProtectedData()))
    .catch(error => {
      dispatch(fetchError(error));
    });
};
