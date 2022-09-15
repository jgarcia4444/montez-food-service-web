const initialState = {
    showOrderDetails: false,
    totalPrice: 0,
    orderItems: []
}

const orderDetailsPresentationReducer = (state=initialState, action) => {
    let {orderInfo} = action;
    let {totalPrice, items} = orderInfo;
    switch (action.type) {
        case "PRESENT_ORDER_DETAILS":
            return {
                ...state,
                showOrderDetails: true,
                orderItems: items,
                totalPrice: totalPrice
            }
        case "DISMISS_ORDER_DETAILS":
            return {
                ...state,
                showOrderDetails: false,
                orderItems: [],
                totalPrice: 0,
            }
        default: 
            return {
                ...state,
            }
    }
}

export default orderDetailsPresentationReducer