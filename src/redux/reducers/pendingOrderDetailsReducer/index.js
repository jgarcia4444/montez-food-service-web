
const initialState = {
    companyName: "",
    createdAt: "",
    deliveryAddress: null,
    totalPrice: 0,
    items: [],
    loading: false,
    loadingError: "",
}

const pendingOrderDetailsReducer = (state=initialState, action) => {
    switch(action.type) {
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