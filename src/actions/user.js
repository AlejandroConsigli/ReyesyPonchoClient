import axios from "axios";
import { headers } from "../shared/utils/conf";
import { openAlert } from "./alerts";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAIL = "USER_FAIL";

export const putPassword = (password) => async (dispatch) => {
    dispatch({
        type: USER_REQUEST,
    });

    try {
        const res = await axios.put("/api/user", password, { headers });

        dispatch(openAlert("success", "Contraseña modificada con éxito"));
        dispatch({
            type: USER_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(openAlert("error", "A ocurrido un error. Por favor, contactar al desarrollador"));
        dispatch({
            type: USER_FAIL,
        });
    }
};
