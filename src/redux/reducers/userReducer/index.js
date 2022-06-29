
const initialState = {
    userInfo: {
        email: "",
        companyName: "",
    },
    loading: false,
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            }
    }
}

export default userReducer;