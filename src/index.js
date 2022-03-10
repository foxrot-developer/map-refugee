import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import hostReducer from './Store/Host/Reducers/HostReducer';
import refugeeReducer from './Store/Refugee/Reducers/RefugeeReducer';
import userTypeReducer from './Store/UserType/Reducers/UserTypeReducer';


const { persistStore, persistReducer } = require('redux-persist');

const rootReducer = combineReducers({
  host: hostReducer,
  refugee: refugeeReducer,
  userType: userTypeReducer
});


let devtools, store;
const isClient = typeof window !== 'undefined';
if (isClient) {
  // devtools =
  //   process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : (f) => f;

  const storage = require('redux-persist/lib/storage').default;
  const persistConfig = {
    key: 'map',
    // blacklist: ['userType'],
    storage,
  };

  store = createStore(
    persistReducer(persistConfig, rootReducer),
    compose(applyMiddleware(thunk))
  );

  store.__PERSISTOR = persistStore(store);
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunk)));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
