import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
} from "../actions/user";

const initialState = {
    loading: false,
    user: null,
};

export default function user(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
            };
        case USER_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
            };
        default:
            return state;
    }
}
