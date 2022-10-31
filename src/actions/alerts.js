export const OPEN_ALERT = "OPEN_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const openAlert = (severity, text) => async (dispatch) => {
    dispatch({
        type: OPEN_ALERT,
        payload: { severity, text },
    });

    setTimeout(() => {
        dispatch({
            type: CLOSE_ALERT,
        });
    }, 5000);
};
