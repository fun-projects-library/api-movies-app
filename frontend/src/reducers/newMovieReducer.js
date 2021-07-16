import {
  NEW_MOVIES_PENDING,
  NEW_MOVIES_FULFILLED,
  NEW_MOVIES_REJECTED
} from "../actions/newMovieActions";
// Create with rxreducer snippet
const initialState = {
  fecthing: false,
  fetched: false,
  movies: [],
  error: {},
};

const newMovieReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_MOVIES_PENDING:
      return { ...state, fecthing: true, fetched: false };
    case NEW_MOVIES_FULFILLED:
      return { ...state, fecthing: false, fetched: true, movies: payload };
    case NEW_MOVIES_REJECTED:
      return { ...state, fecthing: false, fetched: true, error: payload };
    default:
      return state;
  }
};


export default newMovieReducer;