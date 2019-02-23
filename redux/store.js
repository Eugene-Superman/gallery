import {
  GET_LIST,
  GET_IMAGE,
} from "./actionTypes";

import { createStore } from "redux";

const initialState = {
  allPhotos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return state.allPhotos = action.payload;
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;