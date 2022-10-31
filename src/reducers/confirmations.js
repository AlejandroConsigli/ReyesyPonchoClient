import { CONFIRMATIONS_REQUEST, CONFIRMATIONS_SUCCESS, CONFIRMATION_SUCCESS, CONFIRMATIONS_FAIL } from "../actions/confirmations";

const initialState = {
    loading: false,
    confirmations: [],
    confirmation: {}
};

export default function confirmations(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CONFIRMATIONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CONFIRMATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmations: payload,
            };
        case CONFIRMATION_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmation: payload,
            };
        case CONFIRMATIONS_FAIL:
            return {
                ...state,
                loading: false,
                confirmations: null,
            };
        default:
            return state;
    }
}
