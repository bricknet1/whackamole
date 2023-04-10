import scoreReducer from "./score";
import timeReducer from "./time";
import healthReducer from "./health";
import attackValueReducer from "./attack";
import defenseValueReducer from "./defense";
import hole1Reducer from "./hole1";
import hole2Reducer from "./hole2";
import hole3Reducer from "./hole3";
import hole4Reducer from "./hole4";
import hole5Reducer from "./hole5";
import hole6Reducer from "./hole6";
import hole7Reducer from "./hole7";
import hole8Reducer from "./hole8";
import hole9Reducer from "./hole9";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  score: scoreReducer,
  time: timeReducer,
  health: healthReducer,
  attackValue: attackValueReducer,
  defenseValue: defenseValueReducer,
  hole1: hole1Reducer,
  hole2: hole2Reducer,
  hole3: hole3Reducer,
  hole4: hole4Reducer,
  hole5: hole5Reducer,
  hole6: hole6Reducer,
  hole7: hole7Reducer,
  hole8: hole8Reducer,
  hole9: hole9Reducer,
});

export default allReducers;