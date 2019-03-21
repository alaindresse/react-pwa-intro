import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WithLogger } from './context/with-logger';
import { WithServiceWorker } from './context/with-service-worker';

ReactDOM.render(
  <WithLogger>
    <WithServiceWorker>
      <App />
    </WithServiceWorker>
  </WithLogger>,
  document.getElementById('root')
);
