import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions/authActions";

const initState = {
    isAuthenticated: false,
    error: false,
    errorMessage: '',
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                error: false,
                errorMessage: ''
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: true,
                isAuthenticated: false,
                errorMessage: action.error
            };
        case LOGOUT:
            return {
                isAuthenticated: false
            };
        default:
            return state;
    }
}

export default authReducer;