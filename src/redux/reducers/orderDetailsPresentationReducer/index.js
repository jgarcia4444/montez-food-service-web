const initialState = {
    presentOrderDetails: false,
    orderItems: []
}

const orderDetailsPresentationReducer = (state=initialState, action) => {
    switch (action.type) {
        case "PRESENT_ORDER_DETAILS":
            return {
                ...state,
                presentOrderDetails: true,
                orderItems: action.orderItems,
            }
        case "DISMISS_ORDER_DETAILS":
            return {
                ...state,
                presentOrderDetails: false,
                orderItems: [],
            }
        default: 
            return {
                ...state,
            }
    }
}

export default orderDetailsPresentationReducer