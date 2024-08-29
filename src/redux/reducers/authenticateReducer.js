let initialState = {
    id: "",
    password: "",
    authenticate: false,
};

function authenticateReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("login success reducer");
            return {
                ...state,
                id: payload.id,
                password: payload.password,
                authenticate: true,
            };
        case "LOGOUT":
            console.log("log-out success reducer");
            return {
                ...state,
                id: "",
                password: "",
                authenticate: false,
            };
        default:
            return { ...state };
    }
}

export default authenticateReducer;
