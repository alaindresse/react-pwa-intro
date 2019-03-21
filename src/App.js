import React from 'react';
import './App.css';
import { LogDisplay } from './components/log-display';
import { NewContentNotification } from './components/new-content-notification';
import { PermissionRequestor } from './components/permission-requestor';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <p className="title">Intro to Progressive Web Apps</p>
        <p>with create-react-app</p>
      </header>
      <div className="app-body">
        <NewContentNotification />
        <PermissionRequestor />
      </div>
      <div className="app-footer">
        <LogDisplay />
      </div>
    </div>
  );
};

export default App;
