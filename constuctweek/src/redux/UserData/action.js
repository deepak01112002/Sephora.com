import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from "./actionTypes";

// Action creators for getting users
export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

// Action creators for posting user
export const postUserRequest = () => ({
  type: POST_USER_REQUEST,
});

export const postUserSuccess = () => ({
  type: POST_USER_SUCCESS,
});

export const postUserFailure = (error) => ({
  type: POST_USER_FAILURE,
  payload: error,
});

// Thunk action creator for getting users
export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get("https://mock-server-app-0i38.onrender.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getUsersFailure(errorMessage));
      });
  };
};

// Thunk action creator for posting user
export const postUser = (userData) => {
  return (dispatch) => {
    dispatch(postUserRequest());
    axios
      .post("https://mock-server-app-0i38.onrender.com/users", userData)
      .then(() => {
        dispatch(postUserSuccess());
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(postUserFailure(errorMessage));
      });
  };
};
