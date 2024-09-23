let initialState = {
    productList: [],
    selectedItem: null,
};

// 리듀서는 함수다. 파라미터 (state, action)
function productReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, productList: payload.data };
        case "GET_DETAIL_SUCCESS":
            return { ...state, selectedItem: payload.data };
        default:
            return { ...state };
    }
}

export default productReducer;
