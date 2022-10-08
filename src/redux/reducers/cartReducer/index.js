
const initialState = {
    items: [],
    sendingOrder: false,
    orderSendError: ""
}

const updateItemsProperties = (item, newQuantity) => {
    item.quantity = newQuantity;
    item.totalPrice = (parseFloat(item.price) * parseInt(newQuantity)).toFixed(2);
    return item;
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ACCOUNT_VERIFICATION_SUCCESS":
            return {
                ...state,
                items: action.lastCartInfo.items,
            }
        case "ORDER_SEND_ERROR":
            return {
                ...state,
                sendingOrder: false,
            }
        case "ORDER_SEND_SUCCESS":
            return {
                ...state,
                sendingOrder: false,
            }
        case "SENDING_ORDER":
            return {
                ...state,
                sendingOrder: true,
            }
        case "UPDATE_ORDER_ITEM_QUANTITY":
            state.items.forEach(item => {
                if (item.description === action.cartItem.description) {
                    item = updateItemsProperties(item, action.cartItem.quantity)
                }
            })
            let quantityUpdatedItems = state.items
            return {
                ...state,
                items: quantityUpdatedItems,
            }
        case "REMOVE_ORDER_ITEM":
            let itemsWithRemovedItem = state.items.filter(item => item.description !== action.itemName);
            return {
                ...state,
                items: itemsWithRemovedItem,
            }
        case "ADD_ITEM_TO_CART":
            if (state.items.some(item => item.description === action.cartItem.description)) {
                console.log("TEST!!!")
                let itemIndex;
                for(let i = 0; i < state.items.length; i++) {
                    let item = state.items[i];
                    if (item.description === action.cartItem.description) {
                        itemIndex = i;
                        break;
                    }
                }
                let itemsWithUpdatedProperties = state.items.filter(item => item.description !== action.cartItem.description);
                console.log(itemsWithUpdatedProperties);
                let newQuantity = parseInt(state.items[itemIndex].quantity) + parseInt(action.cartItem.quantity)
                let updatedItem = updateItemsProperties(state.items[itemIndex], newQuantity)
                itemsWithUpdatedProperties.push(updatedItem);
                console.log(itemsWithUpdatedProperties);
                return {
                    ...state,
                    items: itemsWithUpdatedProperties,
                }
            } else {
                return {
                    ...state,
                    items: state.items.concat(action.cartItem),
                }
            }
        default:
            return {
                ...state,
            }
    }
}

export default cartReducer;