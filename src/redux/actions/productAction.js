// 미들웨어 함수 정의
// 미들웨어 함수는 함수를 리턴한다.(() => {})
// 리턴하는 함수는 두개의 매개변수를 가져간다.(dispatch, getState ==> 현재의 state정보)
// productList의 getProducts함수를 미들웨어 함수로 만들어보자

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/delikeyki1016/hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("미들웨어의 데이타", data);
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    };
}

export const productAction = { getProducts };
