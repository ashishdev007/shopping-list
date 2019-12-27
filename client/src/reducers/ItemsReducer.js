import { FETCH_ITEMS, DELETE_ITEM } from "../actions/types";
import omit from "lodash.omit";

const INITIAL_STATE = {
    "1": { _id: "1", name: "Milk" },
    "2": { _id: "2", name: "Eggs" },
    "3": { _id: "3", name: "Trash Bags" },
    "4": { _id: "4", name: "Vaccum Cleaner" }
};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, ...action.payload };
        case DELETE_ITEM:
            return omit(state, action.payload);
        default:
            return state;
    }
};

export default itemsReducer;
