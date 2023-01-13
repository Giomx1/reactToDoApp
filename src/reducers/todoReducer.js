import _ from "lodash";
import {
  FETCH_TODO,
  FETCH_TODOS,
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
      // in this case, payload is the id itself
      // omit will not change but create a new state object
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
