import React, { useContext } from "react";
import { ServiceWorkerContext } from "../context/with-service-worker";
import styles from "./new-content-notification.module.css";

export const NewContentNotification = () => {
  const { registration, hasNewContent } = useContext(ServiceWorkerContext);

  if (!hasNewContent) return null;

  const refreshServiceWorker = () => {
    if (!registration || !registration.waiting) return;
    registration.waiting.postMessage("skipWaiting");
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.notification}>
        <p>A new version is available</p>
        <button className={styles.button} onClick={refreshServiceWorker}>
          Update
        </button>
      </div>
    </div>
  );
};
