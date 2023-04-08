import scoreReducer from "./score";
import timeReducer from "./time";
import healthReducer from "./health";
import attackValueReducer from "./attack";
import hole1Reducer from "./hole1";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  score: scoreReducer,
  time: timeReducer,
  health: healthReducer,
  attackValue: attackValueReducer,
  hole1: hole1Reducer,
});

export default allReducers;