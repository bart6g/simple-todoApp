import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";
import styles from "./tasklist.module.scss";
const TaskList = ({ done }) => {
  const { tasks, changeTaskStatus, deleteTask } = useContext(TaskContext);
  const todoTask = tasks.filter((task) => !task.done);
  const doneTask = tasks.filter((task) => task.done);

  return done ? (
    <div className={styles.container}>
      {todoTask.map((task) => (
        <Task
          id={task.id}
          title={task.title}
          desc={task.desc}
          date={task.date}
          key={task.id}
          done={task.done}
          changeTaskStatus={changeTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  ) : (
    <div className={styles.container}>
      {doneTask.map((task) => (
        <Task
          id={task.id}
          title={task.title}
          desc={task.desc}
          date={task.date}
          key={task.id}
          done={task.done}
          changeTaskStatus={changeTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
