import { CART_FAILURE, CART_REQUEST, CLEAR_CART, GET_CART_PRODUCT } from "./actionType";

const initialState = {
    data: [],
    isLoading: false,
    error: false,
    tax: 0,
    shipping: 0,
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "Request":
        return {
          ...state,
          isLoading: true,
          error: false,
        };
      case "Success":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: false,
        };
      case "Failure":
        return {
          ...state,
          isLoading: false,
          error: true,
        };
      case "clear" : 
      return {
        ...state,
        data : [],
      } 
      default:
        return state;
    }
  };