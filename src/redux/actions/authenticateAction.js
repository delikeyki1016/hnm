import { authActions } from "../reducers/authenticateReducer";

function login(id, password) {
    return (dispatch, getState) => {
        console.log("login success middleware");
        // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
        // redux-toolkit 사용 시
        dispatch(authActions.login({ id, password }));
    };
}

function logout() {
    return (dispatch, getState) => {
        console.log("log-out success middleware");
        // dispatch({ type: "LOGOUT" });
        dispatch(authActions.logout());
    };
}

export const authenticateAction = { login, logout };
