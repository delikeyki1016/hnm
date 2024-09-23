// reducer를 합치기 ==> combineReducer를 이용
import { combineReducers } from "redux";
// 합치고 싶은 리듀서를 import
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
    // 리듀서를 키이름으로 단순화 시켜서 객체로 만듦
    auth: authenticateReducer,
    product: productReducer,
});
