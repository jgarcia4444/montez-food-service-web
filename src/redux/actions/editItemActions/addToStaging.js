
const addToStaging = (itemInfo) => {
    return {
        type: "ADD_ITEM_TO_STAGING",
        itemToAdd: itemInfo,
    }
}

export default addToStaging;