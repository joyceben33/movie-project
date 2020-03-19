import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MoviesReducer from './reducer-movies';
import MoviesOrderReducer from "./reducer-movies-order";
import TotalPagesReducer from './reducer-total-pages';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movies_order: MoviesOrderReducer,
  total_pages: TotalPagesReducer
});

export default rootReducer;