import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import './Styles/main.scss';
import { Provider } from 'react-redux';
import configureStore from './StateManagement/Store/configureStore';
import App from './App/App';
//import registerServiceWorker from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App/App', renderApp);
}

renderApp();
//registerServiceWorker();
