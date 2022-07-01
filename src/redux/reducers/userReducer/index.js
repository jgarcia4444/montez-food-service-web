
const initialState = {
    userInfo: {
        email: "",
        companyName: "",
    },
    loading: false,
    userCreationError: "",
    loggingInError: "",
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case "USER_LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                loggingInError: action.errorMessage,
            }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                loggingInError: "",
                userInfo: {
                    ...action.userInfo,
                }
            }
        case "LOGGING_USER_IN":
            return {
                ...state,
                loggingInError: "",
                loading: true,
            }
        case "USER_LOGOUT":
            return {
                ...initialState
            }
        case 'CREATING_USER':
            return {
                ...state,
                loading: true,
                userCreationError: "",
            }
        case "USER_CREATION_SUCCESS":
            return {
                ...state,
                loading: false,
                userInfo: {
                    ...action.userInfo,
                },
                userCreationError: "",
            }
        case "USER_CREATION_ERROR":
            return {
                ...state,
                loading: false,
                userCreationError: action.errorMessage,
            }
        default:
            return {
                ...state,
            }
    }
}

export default userReducer;