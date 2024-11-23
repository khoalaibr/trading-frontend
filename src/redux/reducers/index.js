import { combineReducers } from 'redux';
import tickersReducer from './tickersReducer';
import resultsReducer from './resultsReducer';

const rootReducer = combineReducers({
  tickers: tickersReducer,
  results: resultsReducer,
});

export default rootReducer;
