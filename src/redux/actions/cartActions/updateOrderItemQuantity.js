
const updateOrderItemQuantity = (orderItemInfo) => {
    console.log("ORDER ITEM INFO", orderItemInfo);
    return {
        type: "EDIT_ORDER_ITEM_QUANTITY",
        orderItemInfo
    }
}

export default updateOrderItemQuantity;