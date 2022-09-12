import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer';
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
import orderDetailsPresentationReducer from "./orderDetailsPresentationReducer";

const rootReducer = combineReducers({
    userReducer,
    order: orderReducer,
    cart: cartReducer,
    orderDetails: orderDetailsPresentationReducer,
})

export default rootReducer;