const initialState = {
    showOrderDetails: false,
    orderItems: []
}

const orderDetailsPresentationReducer = (state=initialState, action) => {
    switch (action.type) {
        case "PRESENT_ORDER_DETAILS":
            return {
                ...state,
                showOrderDetails: true,
                orderItems: action.orderItems,
            }
        case "DISMISS_ORDER_DETAILS":
            return {
                ...state,
                showOrderDetails: false,
                orderItems: [],
            }
        default: 
            return {
                ...state,
            }
    }
}

export default orderDetailsPresentationReducer