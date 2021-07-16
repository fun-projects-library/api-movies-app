import axios from "axios";
import { API_BASE } from "../config/env"

export const FETCHED_MOVIES = "FETCHED_MOVIES"
export const FETCHED_MOVIES_FULFILLED = "FETCHED_MOVIES_FULFILLED"
export const FETCHED_MOVIES_REJECTED = "FETCHED_MOVIES_REJECTED"
// export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR"

export function fetchMovies (){
    return dispatch => {
        dispatch({
            type: FETCHED_MOVIES,
            payload: axios.get(API_BASE + "/movies")
            .then(res=> res.data)
        })
    }
}
// export function fetchMovies (){
//     return dispatch => {
//         axios.get(API_BASE + "/movies")
//         .then(res=> res.data)
//         .then(data=> {
//             //console.log(data)
//             dispatch({type:FETCHED_MOVIES, payload: data})
//         })
//         .catch(err=>{
//             dispatch({type:FETCHED_MOVIES_ERROR, payload: err})
//         })
//     }
// }