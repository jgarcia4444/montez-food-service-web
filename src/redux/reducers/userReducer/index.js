
const initialState = {
    userInfo: {
        email: "",
        companyName: "",
        otaCode: ""
    },
    loading: false,
    userCreationError: "",
    loggingInError: "",
    loginErrors: [],
    signupErrors: [],
    passwordResetError: "",
}

const configureSignUpErrors = (errors) => {
    let errorKeys = Object.keys(errors);
    let errorsForReducer = [];
    errorKeys.forEach(errorKey => {
        if (errorKey === "company_name") {
            errorsForReducer.push({errorLabel: "companyName", message: errors[errorKey][0]})
        } else {
            errorsForReducer.push({errorLabel: errorKey, message: errors[errorKey][0]});
        }
    })
    return errorsForReducer;
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case "PASSWORD_CHANGE_ERROR":
            return {
                ...state,
                loading: false,
                passwordResetError: action.errorMessage,
            }
        case "PASSWORD_CHANGE_SUCCESS":
            return {
                ...state,
                loading: false,
                passwordResetError: "",
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo
                }
            }
        case "CHANGING_PASSWORD":
            return {
                ...state,
                loading: true,
                passwordResetError: ""
            }
        case "CODE_CHECK_ERROR":
            return {
                ...state,
                loading: false,
                passwordResetError: action.errorMessage,
            }
        case "CODE_CHECK_SUCCESS":
            return {
                ...state,
                loading: false,
                passwordResetError: "",
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo
                }
            }
        case "CHECKING_CODE":
            return {
                ...state,
                loading: true,
                passwordResetError: "",
            }
        case "CODE_SEND_SUCCESS":
            return {
                ...state,
                loading: false,
                passwordResetError: "",
                userInfo: {
                    ...state.userInfo,
                    email: action.email,
                }
            }
        case "CODE_SEND_ERROR":
            return {
                ...state,
                loading: false,
                passwordResetError: action.errorMessage
            }
        case "SENDING_CODE":
            return {
                ...state,
                loading: true,
                passwordResetError: ""
            }
        case "USER_LOGIN_ERROR":
            let errors = {
                loggingInError: "",
                loginErrors: []
            }
            if (action.error.hasOwnProperty('errorLabel')) {
                errors.loginErrors = [action.error];
            } else {
                errors.loggingInError = action.error.message;
            }
            return {
                ...state,
                loading: false,
                ...errors,
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
            let newSignupErrors = {
                userCreationError: "",
                signupErrors: []
            };
            if (action.error.hasOwnProperty('errors')) {
                newSignupErrors.signupErrors = configureSignUpErrors(action.error.errors);
            } else {
                newSignupErrors.userCreationError = action.error.message;
            }
            return {
                ...state,
                loading: false,
                ...newSignupErrors
            }
        default:
            return {
                ...state,
            }
    }
}

export default userReducer;