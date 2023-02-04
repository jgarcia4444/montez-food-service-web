
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
    itemEditProcessing: false,
    itemEditError: "",
}

const changeItem = (itemInfo, items) => {
    let indexToReinsert;
    let itemsSelected = items.filter((item, i) => {
        if (item.id !== itemInfo.id) {
            return item;
        } else {
            indexToReinsert = i;
        }
    })
    itemsSelected.splice(indexToReinsert, 0, itemInfo);
    return itemsSelected;
} 

const pendingOrderDetailsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "":
            return {
                ...state,
                itemEditProcessing: false,
                itemEditError: action.message,
            }
        case "ORDER_ITEM_UPDATE_SUCCESS":
            let changedItemItems = changeItem(action.orderItemInfo, state.items)
            return {
                ...state,
                itemEditProcessing: false,
                itemEditError: "",
                items: changedItemItems,
                totalPrice: action.totalPrice
            }
        case "UPDATING_ORDER_ITEM":
            return {
                ...state,
                itemEditProcessing: true,
                itemEditError: ""
            }
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