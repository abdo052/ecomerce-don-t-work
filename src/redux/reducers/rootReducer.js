import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  // store and rename allReducer {chilldern reducers} then send to store js
  allCategory: categoryReducer,
});



