import {
    FETCH_ITEMS,
    LOADING_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from "../actions/types";
import mapkeys from "lodash.mapkeys";
import omit from "lodash.omit";

const INITIAL_STATE = {
    loading: false,
    values: {}
};

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_ITEMS:
            return { ...state, loading: true };
        case FETCH_ITEMS:
            return {
                ...state,
                loading: false,
                values: { ...state.values, ...mapkeys(action.payload, "_id") }
            };

        case ADD_ITEM:
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload._id]: action.payload
                }
            };

        case DELETE_ITEM:
            return { ...state, values: omit(state.values, action.payload) };

        default:
            return state;
    }
};

export default itemsReducer;
