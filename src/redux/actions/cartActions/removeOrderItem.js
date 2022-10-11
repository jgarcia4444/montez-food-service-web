
const removeOrderItem = (itemName) => {
    return {
        type: "REMOVE_ORDER_ITEM",
        itemName,
    }
};

export default removeOrderItem;