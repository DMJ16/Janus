import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  products: [],
  id: 0,
  reviewResults: [],
  relatedProducts: [],
  ratingsMeta: {},
  styles: [],
  selected_id: 0,
  styles: [],
  outfit: [],
  info: {},
  compareProducts: {},
  relatedStyles: [],
};

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(`|Middleware| Dispatching:`, action);
      const results = next(action);
      console.log('|Middleware| next state', store.getState());
      return results;
    };
  };
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
