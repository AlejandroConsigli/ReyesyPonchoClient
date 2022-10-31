import {
    OPEN_ALERT,
    CLOSE_ALERT
} from "../actions/alerts";

const initialState = {
    open: false,
    severity: "success",
    text: ""
};

export default function alert(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case OPEN_ALERT:
            return {
                ...state,
                open: true,
                severity: payload.severity,
                text: payload.text
            };
        case CLOSE_ALERT:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
}
