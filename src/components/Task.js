import React, { useState, useContext } from "react";
import styles from "./task.module.scss";
import { ThemeContext } from "../context/ThemeContext";
import { FaArrowDown, FaTrash } from "react-icons/fa";

const Task = ({ id, title, desc, done, deleteTask, changeTaskStatus }) => {
  const [hidden, setHidden] = useState(true);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const handleClick = () => {
    const actual = hidden;
    setHidden(!actual);
    console.log(hidden);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.btn }}
      key={id}
    >
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          <input
            type="checkbox"
            name="done"
            id="done"
            className={styles.input}
            checked={done}
            onChange={() => changeTaskStatus(id)}
          />
        </div>
      </div>
      <div className={`${styles.desc} ${hidden ? styles.hide : styles.show}`}>
        {desc}
      </div>
      <div className={styles.icon}>
        <div className={styles.pair} onClick={handleClick}>
          <FaArrowDown className={styles.arrow} />
          <div>{hidden ? "show" : "hide"} description</div>
        </div>
        <FaTrash onClick={() => deleteTask(id)} />
      </div>
    </div>
  );
};

export default Task;
