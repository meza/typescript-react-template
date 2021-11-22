import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { logger } from 'redux-logger';
import rootReducer from '../Reducers';

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore(preloadedState: RootState = {}) {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../Reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
