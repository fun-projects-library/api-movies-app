import { FETCHED_MOVIES, FETCHED_MOVIES_FULFILLED, FETCHED_MOVIES_REJECTED } from '../actions/movieActions'
const initialState = {
  fetching: false, 
  fetched: false,
  movies: [],
  error: {}
};



 const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_MOVIES: return { ...state, fetching: true, fetched: false }
    case FETCHED_MOVIES_FULFILLED: return { ...state, fetching:false, fetched: true, movies: payload }
    case FETCHED_MOVIES_REJECTED: return { ...state,fetching:false, fetched:true, error: payload }
    //case FETCHED_MOVIES_ERROR: return { ...state, error: payload }
    default:
      return state;
  }
}

export default moviesReducer;
