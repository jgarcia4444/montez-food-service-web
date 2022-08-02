
const initialState = {
    items: [],
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM_TO_CART":
            return {
                ...state,
                items: state.items.concat(action.cartItem),
            }
        default:
            return {
                ...state,
            }
    }
}

export default cartReducer;