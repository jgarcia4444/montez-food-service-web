const initialState = {
    showOrderDetails: false,
    totalPrice: 0,
    orderItems: [],
    orderAddress: null,
}

const orderDetailsPresentationReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case "PRESENT_ORDER_DETAILS":
            let {orderInfo} = action;
            let {totalPrice, items, orderAddress} = orderInfo;
            return {
                ...state,
                showOrderDetails: true,
                orderItems: items,
                totalPrice: totalPrice,
                orderAddress: orderAddress,
            }
        case "DISMISS_ORDER_DETAILS":
            return {
                ...state,
                showOrderDetails: false,
                orderItems: [],
                totalPrice: 0,
                orderAddress: null
            }
        default: 
            return {
                ...state,
            }
    }
}

export default orderDetailsPresentationReducer