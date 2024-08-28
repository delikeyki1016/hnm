import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/index"; // "./reducers" 까지만 써줘도 index를 읽어옴

// let store = createStore(productReducer, applyMiddleware(thunk));
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
