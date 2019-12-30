import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOADING:
            return { ...state, isLoading: true };
        case USER_LOADED:
            return {
                ...state,
                ...{
                    isAuthenticated: true,
                    isLoading: false,
                    user: action.payload
                }
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };

        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            };

        default:
            return state;
    }
};

export default authReducer;
