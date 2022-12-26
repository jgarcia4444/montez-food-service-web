import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer';
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
import orderDetailsPresentationReducer from "./orderDetailsPresentationReducer";
import adminReducer from "./adminReducer";

const rootReducer = combineReducers({
    userReducer,
    order: orderReducer,
    cart: cartReducer,
    orderDetails: orderDetailsPresentationReducer,
    admin: adminReducer,
})

export default rootReducer;