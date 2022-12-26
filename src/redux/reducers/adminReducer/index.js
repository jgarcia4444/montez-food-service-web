
const initialState = {
    username: "",
    adminLoginError: "",
    loggingInAdmin: false,
    pendingOrderIds: [],
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
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
                pendingOrderIds: action.pendingOrderIds,
            }
        default:
            return {
                ...state,
            }
    }
}

export default adminReducer;