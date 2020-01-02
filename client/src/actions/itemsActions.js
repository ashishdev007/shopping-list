import { FETCH_ITEMS, LOADING_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";
import axios from "axios";
import { returnErrors } from "./errorActions";

///Make a get token method
export const fetchItems = () => async dispatch => {
    dispatch({ type: LOADING_ITEMS });
    try {
        const res = await axios.get("/api/items");

        dispatch({
            type: FETCH_ITEMS,
            payload: res.data
        });
    } catch (err) {
        const { data, status } = err.response;
        dispatch(returnErrors(data.msg, status, FETCH_ITEMS + "_FAIL"));
    }
};

export const addItem = name => async (dispatch, getState) => {
    try {
        const res = await axios.post(
            "/api/items",
            { name: name },
            {
                headers: {
                    "Content-type": "application/json",
                    "x-auth-token": getState().auth.token
                }
            }
        );

        dispatch({
            type: ADD_ITEM,
            payload: res.data
        });
    } catch (err) {
        const { data, status } = err.response;
        dispatch(returnErrors(data.msg, status, ADD_ITEM + "_FAIL"));
    }
};

export const deleteItem = id => async (dispatch, getState) => {
    try {
        await axios.delete(`/api/items/${id}`, {
            headers: {
                "Content-type": "application/json",
                "x-auth-token": getState().auth.token
            }
        });
        dispatch({
            type: DELETE_ITEM,
            payload: id
        });
    } catch (err) {
        const { data, status } = err.response;

        dispatch(returnErrors(data.msg, status, DELETE_ITEM + "_FAIL"));
    }
};
