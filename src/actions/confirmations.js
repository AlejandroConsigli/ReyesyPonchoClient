import axios from "axios";
import { headers } from "../shared/utils/conf";
import { openAlert } from "./alerts";

export const CONFIRMATIONS_REQUEST = "CONFIRMATIONS_REQUEST";
export const CONFIRMATIONS_SUCCESS = "CONFIRMATIONS_SUCCESS";
export const CONFIRMATION_SUCCESS = "CONFIRMATION_SUCCESS";
export const CONFIRMATIONS_FAIL = "CONFIRMATIONS_FAIL";

export const getConfirmations = () => async (dispatch) => {
    dispatch({
        type: CONFIRMATIONS_REQUEST,
    });

    try {
        const res = await axios.get("/api/confirmations", { headers });
        dispatch({
            type: CONFIRMATIONS_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(openAlert("error", "A ocurrido un error. Por favor, contactar al desarrollador"));
        dispatch({
            type: CONFIRMATIONS_FAIL,
        });
    }
};

export const postConfirmations = (confirmation) => async (dispatch) => {
    dispatch({
        type: CONFIRMATIONS_REQUEST,
    });

    try {
        const res = await axios.post("/api/confirmations", confirmation, { headers });
        dispatch({
            type: CONFIRMATION_SUCCESS,
            payload: res.data,
        });
        dispatch(openAlert("success", "Confirmación enviada con éxito"));
    } catch (err) {
        dispatch(openAlert("error", "A ocurrido un error. Por favor, contactar al desarrollador"));
        dispatch({
            type: CONFIRMATIONS_FAIL,
        });
    }
};

export const deleteConfirmation = (confirmationId) => async (dispatch) => {
    dispatch({
        type: CONFIRMATIONS_REQUEST,
    });

    try {
        const res = await axios.delete(`/api/confirmations/${confirmationId}`, { headers });
        dispatch({
            type: CONFIRMATIONS_SUCCESS,
            payload: res.data,
        });
        dispatch(openAlert("success", "Confirmación eliminada con éxito"));
    } catch (err) {
        dispatch(openAlert("error", "A ocurrido un error. Por favor, contactar al desarrollador"));
        dispatch({
            type: CONFIRMATIONS_FAIL,
        });
    }
};
