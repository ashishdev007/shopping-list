import { FETCH_ITEMS, DELETE_ITEM } from "./types";
import axios from "../apis/axios";

export const fetchItems = () => async dispatch => {
    const res = await axios.get("/api/items");

    dispatch({
        type: "abc",
        payload: res.data
    });
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};
