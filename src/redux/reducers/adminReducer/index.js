
const initialState = {
    username: "",
    adminLoginError: "",
    loggingInAdmin: false,
    pendingOrders: null,
    fetchingPendingOrders: false,
    pendingOrdersFetchError: ""
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ORDER_CONFIRMATION_SUCCESS":
            return {
                ...state,
                pendingOrders: state.pendingOrders.filter(userOrder => userOrder.id !== action.orderId),
            }
        case "ORDER_CANCEL_SUCCESS":
            return {
                ...state,
                pendingOrders: state.pendingOrders.filter(userOrder => userOrder.id !== action.orderId),
            }
        case "PENDING_ORDERS_FETCH_ERROR":
            return {
                ...state,
                fetchingPendingOrders: false,
                pendingOrdersFetchError: action.message,
                pendingOrders: [],
            }
        case "PENDING_ORDERS_FETCH_SUCCESS":
            return {
                ...state,
                fetchingPendingOrders: false,
                pendingOrders: action.pendingOrders,
                pendingOrdersFetchError: ""
            }
        case "FETCHING_PENDING_ORDERS":
            return {
                ...state,
                fetchingPendingOrders: true,
                pendingOrdersFetchError: ""
            }
        case "ADMIN_LOGGING_IN":
            return {
                ...initialState,
                loggingInAdmin: true,
            }
        case "ADMIN_LOGIN_ERROR":
            return {
                ...state,
                adminLoginError: action.message,
                loggingInAdmin: false,
            }
        case "LOGOUT_ADMIN":
            return {
                ...initialState,
            }
        case "LOGIN_ADMIN":
            return {
                ...state,
                username: action.username,
                adminLoginError: "",
                loggingInAdmin: false,
            }
        default:
            return {
                ...state,
            }
    }
}

export default adminReducer;