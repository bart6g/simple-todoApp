import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import styles from "./modal.module.scss";

const Modal = () => {
  const { isModalOpen, closeModal, addTask } = useContext(TaskContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdding = (e) => {
    e.preventDefault();
    const task = {
      title,
      desc,
      id: uuidv4(),
      done: false,
    };
    addTask(task);
    setDesc("");
    setTitle("");
  };

  const theme = isLightTheme ? light : dark;

  const openStyle = isModalOpen ? styles.opened : null;
  return (
    <div
      className={`${styles.container} ${openStyle}`}
      style={{ backgroundColor: theme.primary }}
    >
      <div className={styles.close} onClick={closeModal}>
        <div className={`${styles.line} ${styles.first}`}></div>
        <div className={`${styles.line} ${styles.second}`}></div>
      </div>
      <form>
        <div className={styles.pair}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.pair}>
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            id="desc"
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          value="add task"
          className={styles.submit}
          onClick={(e) => handleAdding(e)}
          //   style={{
          //     border: `2px solid ${theme.primary}`,
          //     color: `${theme.primary}`,
          //   }}
        />
      </form>
    </div>
  );
};

export default Modal;
