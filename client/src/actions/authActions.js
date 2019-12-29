import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";
import { returnErrors } from "./errorActions";
import axios from "../apis/axios";

export const loadUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    try {
        res = await axios.get("/api/auth/user", tokenConfig(getState()));

        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR });
    }
};

export const register = ({ name, email, password }) => async dispatch => {
    try {
        res = await axios.post(
            "/api/users",
            { name, email, password },
            { headers: { "Content-type": "application/json" } }
        );

        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch(
            returnErrors(err.response.data, err.response.status, REGISTER_FAIL)
        );
        dispatch({ type: REGISTER_FAIL });
    }
};

export const login = ({ email, password }) => async dispatch => {
    try {
        res = await axios.post(
            "/api/auth",
            { email, password },
            { headers: { "Content-type": "application/json" } }
        );
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch(
            returnErrors(err.response.data, err.response.status, LOGIN_FAIL)
        );
        dispatch({ type: LOGIN_FAIL });
    }
};

export const logout = () => {
    return { type: LOGOUT_SUCCESS };
};

const tokenConfig = state => {
    const config = { headers: { "Content-type": "application/json" } };

    if (state.token) {
        config.headers["x-auth-token"] = state.token;
    }

    return config;
};
