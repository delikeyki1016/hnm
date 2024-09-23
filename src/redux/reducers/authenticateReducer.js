// redux-toolkit 사용하기
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: "",
    password: "",
    authenticate: false,
};

// function authenticateReducer(state = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case "LOGIN_SUCCESS":
//             console.log("login success reducer");
//             return {
//                 ...state,
//                 id: payload.id,
//                 password: payload.password,
//                 authenticate: true,
//             };
//         case "LOGOUT":
//             console.log("log-out success reducer");
//             return {
//                 ...state,
//                 id: "",
//                 password: "",
//                 authenticate: false,
//             };
//         default:
//             return { ...state };
//     }
// }

// export default authenticateReducer;

const authSlice = createSlice({
    name: "auth", //prefix로 사용될 이름
    initialState,
    reducers: {
        //기존방식의 switch case를 함수로 만듦 매번쓰는 return과 ...state를 생략하고 바꿔줘야하는 정보만 정의함
        login(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        logout(state, action) {
            state.id = "";
            state.password = "";
            state.authenticate = false;
        },
    },
});

console.log("authSlice", authSlice);

export const authActions = authSlice.actions;
export default authSlice.reducer;
