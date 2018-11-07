import * as actions from "../actions/protected-data";

const initialState = {
  data: "",
  pets: [],
  currentPet: [],
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === actions.FETCH_PETS_SUCCESS) {
    return Object.assign({}, state, {
      pets: action.data,
      loading: false,
      error: null
    });
  } else if (action.type === actions.FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.SET_CURRENT_PET) {
    return Object.assign({}, state, {
      currentPet: action.pet
    });
  } else if (action.type === actions.CLEAR_PETS) {
    return Object.assign({}, {
      pets: []
    });
  } else if (action.type === actions.FETCH_PETS_REQUEST) {
    return Object.assign({}, {
      loading: true
    });
  }
  return state;
}
