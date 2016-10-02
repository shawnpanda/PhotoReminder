import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/reducers';

export default function configureStore(initialState) {
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  const store = createStore(rootReducer, 
              initialState, 
              compose(
                global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope
              ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}