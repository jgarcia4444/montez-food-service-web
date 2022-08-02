import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer';
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    userReducer,
    order: orderReducer,
    cart: cartReducer,
})

export default rootReducer;