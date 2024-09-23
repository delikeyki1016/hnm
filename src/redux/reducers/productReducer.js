// redux-toolkit 사용하기
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    selectedItem: null,
};

// 1. 기존 리덕스 형식
// 리듀서는 함수다. 파라미터 (state, action)
// function productReducer(state = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data };
//         case "GET_DETAIL_SUCCESS":
//             return { ...state, selectedItem: payload.data };
//         default:
//             return { ...state };
//     }
// }

// export default productReducer;

// 2. redux-toolkit 방식
// createSlice는 객체를 매개변수로 받고, 객체 안에는 3개의 필드가 있어야 한다.(name,initialState,reducers)
const productSlice = createSlice({
    name: "product", //prefix로 사용될 이름
    initialState,
    reducers: {
        //기존방식의 switch case를 함수로 만듦 매번쓰는 return과 ...state를 생략하고 바꿔줘야하는 정보만 정의함
        getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProducts(state, action) {
            state.selectedItem = action.payload.data;
        },
    },
});

console.log("productSlice", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
