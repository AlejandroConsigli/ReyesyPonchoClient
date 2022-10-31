import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
} from "../actions/auth";

const initialState = {
    authenticated: false,
    loading: false,
};

export default function auth(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                authenticated: true,
                loading: false,
            };
        case AUTH_FAIL:
            return {
                ...state,
                authenticated: false,
                loading: false,
            };
        default:
            return state;
    }
}
