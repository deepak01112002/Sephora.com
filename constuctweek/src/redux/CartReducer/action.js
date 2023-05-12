
import axios from "axios";
import { CART_FAILURE, CART_REQUEST, CLEAR_CART, GET_CART_PRODUCT } from "./actionType";


export const getData = (dispatch) => {
    dispatch({ type: "Request" });

    axios
      .get("https://mock-server-app-0i38.onrender.com/cart")
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: "Failure", payload: err.message });
      });
  };

export const clearCart = (dispatch)=>{
    return dispatch({type : "clear"})
}

