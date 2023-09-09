import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer,viewReducer,updateReducer,deleteReducer, SingleReducer } from "./reducers/userReducer"

const reducer = combineReducers({
  user: userReducer,
  view: viewReducer,
  update:updateReducer,
  delete:deleteReducer,
  single:SingleReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
