// 그냥 리덕스는 동기적인 작업만 할 수 있다.
// 미들웨어(redux-thunk)로 비동기적인 작업도 가능하다.
// thunk는 액션 크리에이터를 만든다. dispatch를 홀딩한다.
// 미들웨어 함수 정의
// 미들웨어 함수는 함수를 리턴한다.(() => {})
// 리턴하는 함수는 두개의 매개변수를 가져간다.(dispatch, getState ==> 현재의 state정보)
// productList의 getProducts함수를 미들웨어 함수로 만들어보자

import { productActions } from "../reducers/productReducer";
// 액션 크리에이터 함수 정의
function getProducts(searchQuery) {
    // dispatch, getState(현재의 상태값)
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/delikeyki1016/hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("미들웨어의 데이타", data);
        // 리듀서에 디스패치를 이용해 보냄
        // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
        // redux-toolkit 사용 시
        dispatch(productActions.getAllProducts({ data }));
    };
}

function getProductDetail(id) {
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/delikeyki1016/hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("디테일 미들웨어의 데이타", data);
        // dispatch({ type: "GET_DETAIL_SUCCESS", payload: { data } });
        // redux-toolkit 사용 시
        dispatch(productActions.getSingleProducts({ data }));
    };
}

export const productAction = { getProducts, getProductDetail };
