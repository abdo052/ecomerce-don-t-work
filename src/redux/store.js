import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
// run store on chrom browser by redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

// store all reducers on here {store.js} example >>> rooReducer <<<

const initailState = {};

const meddleware = [thunk];

const store = createStore(
  rootReducer,
  initailState,
  composeWithDevTools(applyMiddleware(...meddleware))
);

export default store;
