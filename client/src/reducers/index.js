import scoreReducer from "./score";
import timeReducer from "./time";
import healthReducer from "./health";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  score: scoreReducer,
  time: timeReducer,
  health: healthReducer,
});

export default allReducers;