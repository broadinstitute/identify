import React from 'react';

import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import 'application/dist/toolkit.css';

import App from 'containers/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
