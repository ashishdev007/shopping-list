import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const INITIAL_STATE = {
    msg: null,
    status: null,
    id: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ERRORS:
            const { msg, status, id } = action.payload;
            return { ...state, ...{ msg, status, id } };
        case CLEAR_ERRORS:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};
