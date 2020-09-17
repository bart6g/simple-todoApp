import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const TaskContext = createContext();

// const initialTasks = [
//   {
//     id: uuidv4(),
//     title: "Task1",
//     added: new Date(),
//     desc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates, dolores quo vel veniam officia dolorum reprehenderit minus mollitia, illo consectetur sit quidem, magnam quos quisquam. Atque, blanditiis. Officiis, debitis!",
//     done: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Task2",
//     added: new Date(),
//     desc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates, dolores quo vel veniam officia dolorum reprehenderit minus mollitia, illo consectetur sit quidem, magnam quos quisquam. Atque, blanditiis. Officiis, debitis!",
//     done: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Task3",
//     added: new Date(),
//     desc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates, dolores quo vel veniam officia dolorum reprehenderit minus mollitia, illo consectetur sit quidem, magnam quos quisquam. Atque, blanditiis. Officiis, debitis!",
//     done: true,
//   },
//   {
//     id: uuidv4(),
//     title: "Task4",
//     added: new Date(),
//     desc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates, dolores quo vel veniam officia dolorum reprehenderit minus mollitia, illo consectetur sit quidem, magnam quos quisquam. Atque, blanditiis. Officiis, debitis!",
//     done: false,
//   },
// ];

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModal] = useState(false);

  const deleteTask = (id) => {
    const actualTasks = [...tasks];
    const index = actualTasks.findIndex((task) => task.id === id);
    actualTasks.splice(index, 1);
    setTasks(actualTasks);
  };

  const changeTaskStatus = (id) => {
    const actualTasks = [...tasks];
    actualTasks.forEach((task) => {
      if (task.id === id) {
        let ifDone = task.done;
        task.done = !ifDone;
      }
    });
    setTasks(actualTasks);
  };

  const addTask = (task) => {
    const actualTasks = [...tasks];
    actualTasks.push(task);
    setTasks(actualTasks);
    console.log(tasks);
  };

  const openModal = () => {
    setModal(true);
    console.log(isModalOpen);
    console.log("works");
  };

  const closeModal = () => {
    setModal(false);
    console.log("modal closing");
    console.log(isModalOpen);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        isModalOpen,
        openModal,
        closeModal,
        changeTaskStatus,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
