import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./themetoggle.module.scss";

const ThemeToggle = () => {
  const { isLightTheme, dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={{ backgroundColor: `${isLightTheme ? "#ddd" : dark.secondary}` }}
    >
      <div
        className={`${styles.circle} ${isLightTheme ? null : styles.darktheme}`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
