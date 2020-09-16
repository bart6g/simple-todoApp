import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./links.module.scss";
import TaskList from "./TaskList";

const Links = () => {
  const [clicked, setClick] = useState(false);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const switchToDone = () => {
    setClick(true);
    console.log(clicked);
  };
  const switchToDo = () => {
    setClick(false);
    console.log(clicked);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content} style={{ backgroundColor: theme.main }}>
        <ul className={styles.navLinks}>
          <li>
            <button style={{ backgroundColor: theme.btn }} onClick={switchToDo}>
              to do
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: theme.btn }}
              onClick={switchToDone}
            >
              done
            </button>
          </li>
        </ul>
        <div className={styles.list}>
          {clicked ? <TaskList /> : <TaskList done />}
        </div>
      </div>
    </div>
  );
};

export default Links;
