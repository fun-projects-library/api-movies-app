import axios from "axios";
import { API_BASE } from "../config/env";

export const NEW_MOVIES_PENDING = "NEW_MOVIES_PENDING";
export const NEW_MOVIES_FULFILLED = "NEW_MOVIES_FULFILLED";
export const NEW_MOVIES_REJECTED = "NEW_MOVIES_REJECTED";

export function newMovies() {
  return (dispatch) => {
    dispatch({
      type: "NEW_MOVIES",
      payload: axios.get(`${API_BASE}/movies`).then((result) => result.data),
    });
  };
}
