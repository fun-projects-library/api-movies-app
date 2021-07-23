import {
  NEW_MOVIES_PENDING,
  NEW_MOVIES_FULFILLED,
  NEW_MOVIES_REJECTED
} from "../actions/newMovieActions";
// Create with rxreducer snippet
const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: {},
  redirect:false
};

const newMovieReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_MOVIES_PENDING:
      return { ...state, fetching: true, fetched: false };
    case NEW_MOVIES_FULFILLED:
      return { ...state, fetching: false, fetched: true, movies: payload };
    case NEW_MOVIES_REJECTED:
      return { ...state, fetching: false, fetched: true, error: payload };
    default:
      return state;
  }
};


export default newMovieReducer;