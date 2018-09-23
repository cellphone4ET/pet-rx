import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { loadAuthToken } from "./local-storage";
import authReducer from "./reducers/auth";
import protectedDataReducer from "./reducers/protected-data";
import { petRxReducer } from "./reducers/index";
import { setAuthToken, refreshAuthToken } from "./actions/auth";
console.log("console 1");
const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    pets: petRxReducer
  }),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("con 2");
// Hydrate the authToken from localStorage if it exisddt
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
