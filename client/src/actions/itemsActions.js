import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";
import axios from "../apis/axios";

export const fetchItems = () => async dispatch => {
    const res = await axios.get("/api/items");

    dispatch({
        type: FETCH_ITEMS,
        payload: res.data
    });
};

export const addItem = name => async dispatch => {
    const res = await axios.post("/api/items", { name: name });

    dispatch({
        type: ADD_ITEM,
        payload: res.data
    });
};

export const deleteItem = id => async dispatch => {
    await axios.delete(`/api/items/${id}`);
    dispatch({
        type: DELETE_ITEM,
        payload: id
    });
};
