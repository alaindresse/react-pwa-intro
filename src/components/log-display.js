import React, { useContext } from "react";
import { LoggerContext } from "../context/with-logger";
import styles from "./log-display.module.css";

export const LogDisplay = () => {
  const { logs } = useContext(LoggerContext);
  if (logs.length === 0) return null;
  return (
    <>
      <div className={styles.header}>Logs</div>
      <div className={styles.body}>
        {logs.map(({ date, message }) => (
          <div key={date.getTime()}>
            <p>{message}</p>
            <p className={styles.timestamp}>{date.toString()}</p>
          </div>
        ))}
      </div>
    </>
  );
};
