import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// redux devtool 사용하기
// 크롬확장프로그램에서 redux devtool 추가,
// 터미널 npm install @redux-devtools/extension 설치
// 아래 import 후 composeWithDevTools로 감싸주기
// 개발자도구 redux 에서 정보를 확인
// 리덕스는 동기적으로 state를 처리
// 리덕스 미들웨어는 비동기적인 처리(API요청)가 가능함, 비동기 처리가 끝나면 디스패치로 리듀서로 간다.
// 리덕스 미들웨어 종류 : redux-saga, redux-thunk
// redux-thunk는 action creator를 만들고 function(getState, dispatch를 매개변수로 갖는다)을 리턴함

// 리듀서의 state를 바로바로 확인할 수 있는 개발자도구 툴
import { composeWithDevTools } from "@redux-devtools/extension";

// import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/index"; // "./reducers" 까지만 써줘도 index를 읽어옴

// let store = createStore(productReducer, applyMiddleware(thunk));
// 리듀서 파일이 여러개라면, 합친 리듀서를 만들어서 사용하자. rootReducer
let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
