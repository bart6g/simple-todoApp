import React from "react";
import ThemeContextProvider from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import TaskContextProvider from "./context/TaskContext";
import Modal from "./components/Modal";
import Links from "./components/Links";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TaskContextProvider>
          <NavBar />
          <Modal />
          <Links />
        </TaskContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
