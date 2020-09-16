import React, { useState, useContext } from "react";
import styles from "./addmodal.module.scss";
import { ThemeContext } from "../context/ThemeContext";
import { TaskContext } from "../context/TaskContext";

const AddModal = ({ children, primary }) => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { openModal } = useContext(TaskContext);
  const theme = isLightTheme ? light : dark;
  return primary ? (
    <button
      className={styles.primary}
      onClick={() => openModal()}
      style={{ backgroundColor: theme.btn }}
    >
      {children}
    </button>
  ) : (
    <button
      className={styles.secondary}
      style={{ backgroundColor: theme.btn }}
      onClick={() => openModal()}
    >
      {children}

      <span className={`${styles.line} ${styles.first}`}></span>
      <span className={`${styles.line} ${styles.second}`}></span>
    </button>
  );
};

export default AddModal;
