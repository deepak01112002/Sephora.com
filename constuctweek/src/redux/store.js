import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as userReducer } from "./UserData/reducer";
import {reducer as cartReducer} from "./CartReducer/reducer"


const rootReducer = combineReducers({

  productReducer,userReducer,cartReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
