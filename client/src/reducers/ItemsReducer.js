import { FETCH_ITEMS, DELETE_ITEM } from "../actions/types";
import mapkeys from "lodash.mapkeys";
import omit from "lodash.omit";

// const INITIAL_STATE = {
//     loading: false,
//     values: {}
// };

const INITIAL_STATE = {
    items: {}
};

const itemsReducer = (state = { "1": { _id: "1", name: "Arrow" } }, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            // return { ...state, ...{ "2": { _id: "2", name: "Pumpkin" } } };
            return { ...state, ...mapkeys(action.payload, "_id") };
        // case FETCH_ITEMS:
        //     return {
        //         ...state,
        //         loading: false,
        //         values: { ...state.values, ...action.payload }
        //     };
        // case DELETE_ITEM:
        //     return { ...state, values: omit(state.values, action.payload) };
        case "abc":
            return { ...state, ...{ "2": { _id: "2", name: "Pumpkin" } } };

        default:
            return state;
    }
};

export default itemsReducer;
