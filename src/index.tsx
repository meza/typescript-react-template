import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss';
import { Provider } from 'react-redux';
import configureStore, { history } from './StateManagement/Store/configureStore';
import App from './App/App';
//import registerServiceWorker from './serviceWorkerRegistration';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App/App', renderApp);
}

renderApp();
//registerServiceWorker();
