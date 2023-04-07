import scoreReducer from "./score";
import timeReducer from "./time";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  score: scoreReducer,
  time: timeReducer
});

export default allReducers;