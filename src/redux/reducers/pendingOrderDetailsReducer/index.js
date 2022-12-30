
const initialState = {
    orderId: null,
    companyName: "",
    createdAt: "",
    deliveryAddress: null,
    totalPrice: 0,
    items: [],
    loading: false,
    loadingError: "",
    cancelOrderError: "",
    confirmOrderError: "",
    cancellingOrder: false,
    confirmingOrder: false,
}

const pendingOrderDetailsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ORDER_CONFIRMATION_ERROR":
            return {
                ...state,
                confirmingOrder: false,
                confirmOrderError: action.message,
            }
        case "ORDER_CONFIRMATION_SUCCESS":
            return {
                ...state,
                confirmingOrder: false,
                confirmOrderError: "",
            }
        case "CONFIRMING_ORDER":
            return {
                ...state,
                confirmingOrder: true,
                confirmOrderError: "",
            }
        case "ORDER_CANCEL_ERROR":
            return {
                ...state,
                cancellingOrder: false,
                cancelOrderError: action.message,
            }
        case "ORDER_CANCEL_SUCCESS":
            return {
                ...state,
                cancellingOrder: false,
                cancelOrderError: ""
            }
        case "CANCELLING_ORDER":
            return {
                ...state,
                cancellingOrder: true,
                cancelOrderError: "",
            }
        case "PENDING_DETAILS_ERROR":
            return {
                ...state,
                loading: false,
                loadingError: action.message,
            }
        case "PENDING_DETAILS_SUCCESS":
            return {
                ...state,
                ...action.pendingOrderDetails,
                loading: false,
                loadingError: ""
            }
        case "FETCHING_PENDING_DETAILS":
            return {
                ...state,
                loading: true,
                loadingError: "",
            }
        default: 
            return {
                ...initialState,
            }
    }
}

export default pendingOrderDetailsReducer;