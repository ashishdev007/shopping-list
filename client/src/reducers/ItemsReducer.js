import { FETCH_ITEMS } from "../actions/types";

const INITIAL_STATE = {
    1: "Milk",
    2: "Eggs",
    3: "Trash Bags",
    4: "Vaccum Cleaner"
};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export default itemsReducer;
