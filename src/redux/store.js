import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// redux devtool 사용하기
// 크롬확장프로그램에서 redux devtool 추가,
// 터미널 npm install @redux-devtools/extension 설치
// 아래 import 후 composeWithDevTools로 감싸주기
// 개발자도구 redux 에서 정보를 확인
// 리덕스는 동기적으로 state를 처리
import { composeWithDevTools } from "@redux-devtools/extension";

// import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/index"; // "./reducers" 까지만 써줘도 index를 읽어옴

// let store = createStore(productReducer, applyMiddleware(thunk));
let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
