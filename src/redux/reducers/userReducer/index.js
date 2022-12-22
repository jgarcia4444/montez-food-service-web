
const initialState = {
    userInfo: {
        email: "",
        companyName: "",
        otaCode: "",
        pastOrders: [],
        isOrdering: false,
        verificationError: "",
        isVerifying: false,
        locations: [],
        usersAddress: {
            number: "",
            streetName: "",
            city: "",
            state: "",
            zipCode: "",   
        }
    },
    loading: false,
    userCreationError: "",
    loggingInError: "",
    loginErrors: [],
    signupErrors: [],
    passwordResetError: "",
    savingAddress: false,
    deletingAddress: false,
    addressError: ""
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
        case "LOCATION_DELETE_SUCCESS":
            const locationRemoved = state.userInfo.locations.filter(location => location.id !== action.locationId)
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    locations: locationRemoved,
                },
                deletingAddress: false,
                addressError: "",
            }
        case "LOCATION_DELETE_ERROR":
            return {
                ...state,
                deletingAddress: false,
                addressError: action.message,
            }
        case "DELETING_LOCATION":
            return {
                ...state,
                deletingAddress: true,
                addressError: ""
            }
        case "SAVING_ADDRESS":
            console.log("Saving Address reducer case triggered!!!")
            return {
                ...state,
                savingAddress: true,
                addressError: "",
            }
        case "ADDRESS_SAVE_ERROR":
            return {
                ...state,
                savingAddress: false,
                addressError: action.message
            }
        case "ADDRESS_SAVE_SUCCESS":
            const locationsAdded = state.userInfo.locations.concat(action.usersAddress)
            return {
                ...state,
                savingAddress: false,
                addressError: "",
                userInfo: {
                    ...state.userInfo,
                    usersAddress: {
                        ...action.usersAddress,
                    },
                    locations: locationsAdded,
                }
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                loginErrors: [],
                signupErrors: [],
            }
        case "ACCOUNT_VERIFICATION_SUCCESS":
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo,
                    verificationError: "",
                    isVerifying: false,
                }
            }
        case "ACCOUNT_VERIFICATION_ERROR":
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    verificationError: action.message,
                    isVerifying: false,
                }
            }
        case "VERIFYING_USER":
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    verificationError: "",
                    isVerifying: true,
                }
            }
        case "persist/REHYDRATE":
            if (action.payload !== undefined) {
                let {payload} = action;
                console.log("PAYLOAD", payload);
                return {
                    ...payload.userReducer,
                }
            } else {
                return {
                    ...state,
                }
            }
        case "ORDER_SEND_SUCCESS":
            let updatedPastOrders = [action.pastOrder,...state.userInfo.pastOrders]
            return {
                ...state,
                pastOrders: updatedPastOrders,
            }
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
                    ...state.userInfo,
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
                ...initialState,
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
                    ...state.userInfo,
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