import { GET_LIST, GET_IMAGE, } from "./actionTypes";

export const getList = list => ({
  type: GET_LIST,
  payload: list
});

export const getImage = image => ({
  type: GET_IMAGE,
  payload: image
});