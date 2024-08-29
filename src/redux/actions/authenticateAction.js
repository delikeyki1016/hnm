function login(id, password) {
    return (dispatch, getState) => {
        console.log("login success middleware");
        dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    };
}

function logout() {
    return (dispatch, getState) => {
        console.log("log-out success middleware");
        dispatch({ type: "LOGOUT" });
    };
}

export const authenticateAction = { login, logout };
