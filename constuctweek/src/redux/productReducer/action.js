import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionTypes";

//POST
export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("https://mock-server-app-0i38.onrender.com/products", data)
    .then(() => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//GET
export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("https://mock-server-app-0i38.onrender.com/products", paramObj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//PATCH
export const editProduct = (dataObj, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .patch(`https://mock-server-app-0i38.onrender.com/products/${id}`, dataObj)
    .then(() => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
