import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from '../Reducers';

import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = createRootReducer();

export default function configureStore() {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../Reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
