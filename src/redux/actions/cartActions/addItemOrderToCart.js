
const addItemOrderToCart = (cartItem) => {
    return {
        type: "ADD_ITEM_TO_CART",
        cartItem
    }
}

export default addItemOrderToCart;