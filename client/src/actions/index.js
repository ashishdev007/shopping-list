import { FETCH_ITEMS, DELETE_ITEM } from "./types";

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};
