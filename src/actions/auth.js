import axios from "axios";
import { headers } from "../shared/utils/conf";
import setAuthToken from "../shared/utils/setAuthToken";
import { USER_REQUEST, USER_SUCCESS } from "./user";
import { openAlert } from "./alerts";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

const authFail = (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: AUTH_FAIL,
    });
    dispatch({
        type: USER_SUCCESS,
        payload: null,
    });
};

export const auth = () => async (dispatch) => {
    dispatch({
        type: AUTH_REQUEST,
    });
    dispatch({
        type: USER_REQUEST,
    });

    if (localStorage.token) {
        setAuthToken(localStorage.token);
        try {
            const res = await axios.get("/api/auth");
            dispatch({
                type: AUTH_SUCCESS,
            });
            dispatch({
                type: USER_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            authFail(dispatch);
        }
    } else {
        authFail(dispatch);
    }
};

export const signin = (credentials) => async (dispatch) => {
    dispatch({
        type: AUTH_REQUEST,
    });

    try {
        const res = await axios.post("/api/auth/signin", credentials, { headers });

        localStorage.setItem("token", res.data.token);
        dispatch({
            type: AUTH_REQUEST,
        });
        dispatch(auth());
    } catch (err) {
        if (err.response && err.response.status === 401) {
            dispatch(openAlert("error", "El usuario y/o la contraseña no son correctos"));
        } else {
            dispatch(openAlert("error", "A ocurrido un error. Por favor, contactar al desarrollador"));
        }

        authFail(dispatch);
    }
};

export const signout = () => (dispatch) => {
    authFail(dispatch);
};
