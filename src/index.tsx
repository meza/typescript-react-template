import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App/App';
import registerServiceWorker from './serviceWorkerRegistration';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
