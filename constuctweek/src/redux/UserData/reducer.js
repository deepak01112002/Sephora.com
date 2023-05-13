import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from "./actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  isPosting: false,
  postError: null,
  isAuth : false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case POST_USER_REQUEST:
      return {
        ...state,
        isPosting: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isPosting: false,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        isPosting: false,
        postError: action.payload,
      };
    default:
      return state;
  }
};


