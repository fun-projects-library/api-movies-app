import axios from "axios";
import { API_BASE } from "../config/env";

export const NEW_MOVIES_PENDING = "NEW_MOVIES_PENDING";
export const NEW_MOVIES_FULFILLED = "NEW_MOVIES_FULFILLED";
export const NEW_MOVIES_REJECTED = "NEW_MOVIES_REJECTED";

export function onNewMovieSubmit({title, cover}) {
  console.log(title)
  return (dispatch) => {
    dispatch({
      type: "NEW_MOVIES",
      payload: axios.post(`${API_BASE}/movies`, {title, cover})
      .then((result) => result.data)
      .catch(err=>{console.log(err)}),
    });
  };
}
