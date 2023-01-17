
const initialState = {
    username: "",
    adminLoginError: "",
    loggingInAdmin: false,
    pendingOrders: null,
    fetchingPendingOrders: false,
    pendingOrdersFetchError: "",
    quickbooksAuth: {
        clientID: "",
        clientSecret: "",
        authorizationCode: "",
        realmID: "",
        accessToken: "",
        refreshToken: "",
        fetchingClientDetails: false,
        clientDetailsError: "",
        authorizeUrl: "https://appcenter.intuit.com/connect/oauth2?",
        tokenUrl: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
    }
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case "TOKENS_FETCH_SUCCESS":
            return {
                ...state,
                quickbooksAuth: {
                    ...state.quickbooksAuth,
                    accessToken: action.accessToken,
                    refreshToken: action.refreshToken,
                }
            }
        case "SET_AUTH_CODE_AND_REALM_ID":
            return {
                ...state,
                quickbooksAuth: {
                    ...state.quickbooksAuth,
                    ...action.infoObject,
                }
            }
        case "persist/REHYDRATE":
            console.log("Here is the action info.", action);
            if (action.payload !== undefined) {
                let {payload} = action;
                let {admin} = payload;
                return {
                    ...state,
                    ...admin
                }
            } else {
                return {
                    ...state,
                }
            }
        case "FETCH_CLIENT_DETAILS_SUCCESS":
            return {
                ...state,
                quickbooksAuth: {
                    ...state.quickbooksAuth,
                    fetchingClientDetails: false,
                    ...action.clientDetails,
                }
            }
        case "FETCH_CLIENT_DETAILS_ERROR":
            return {
                ...state,
                quickbooksAuth: {
                    ...state.quickbooksAuth,
                    fetchingClientDetails: false,
                    clientDetailsError: action.message,
                }
            }
        case "FETCHING_CLIENT_DETAILS": 
            return {
                ...state,
                quickbooksAuth: {
                    ...state.quickbooksAuth,
                    fetchingClientDetails: true,
                }
            }
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