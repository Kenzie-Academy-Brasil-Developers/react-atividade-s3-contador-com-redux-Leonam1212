import { ADD_COUNT } from "./actionTypes";
import { SUB_COUNT } from "./actionTypes";
const reducerCounter = (state = 0, action) => {

  switch (action.type) {
    case ADD_COUNT:
      const { add } = action;
      return state + add;
    case SUB_COUNT:
      const { sub } = action;
      return state - sub;
    default:
      return state;
  }
};

export default reducerCounter;
