import React, { createContext, useState } from 'react';

export const LoggerContext = createContext({
  logger: { logs: [], add: () => {} }
});

export const WithLogger = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const add = message => {
    setLogs(logs => [{ date: new Date(), message }, ...logs]);
  };

  return <LoggerContext.Provider value={{ logs, add }}>{children}</LoggerContext.Provider>;
};
