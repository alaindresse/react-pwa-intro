import React, { createContext, useContext, useState, useEffect } from "react";
import * as serviceWorker from "../serviceWorker";
import { LoggerContext } from "./with-logger";

export const ServiceWorkerContext = createContext({
  hasNewContent: false
});

export const WithServiceWorker = ({ children }) => {
  const [hasNewContent, setNewContent] = useState(false);
  const [registration, setRegistration] = useState(undefined);
  const logger = useContext(LoggerContext);

  const onRegistration = registration => {
    setRegistration(registration);
    setNewContent(registration.waiting && registration.active);
    logger.add("service worker registered");
  };

  const onSuccess = registration => {
    setRegistration(registration);
    logger.add("service worker installed");
  };

  const onUpdate = registration => {
    setRegistration(registration);
    setNewContent(true);
    logger.add("service worker updated");
  };

  useEffect(() => {
    serviceWorker.register({ onRegistration, onSuccess, onUpdate });

    const logOnlineStatus = () => logger.add(navigator.online ? "now online" : "now offline");
    window.addEventListener("online", logOnlineStatus);
    window.addEventListener("offline", logOnlineStatus);

    return () => serviceWorker.register();
  }, []);

  const context = { hasNewContent, registration, logger };
  return <ServiceWorkerContext.Provider value={context}>{children}</ServiceWorkerContext.Provider>;
};
