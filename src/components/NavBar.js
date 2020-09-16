import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import AddModal from "./AddModal";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  return (
    <nav
      style={{
        backgroundColor: `${isLightTheme ? light.primary : dark.primary}`,
      }}
    >
      <div className={styles.container}>
        <ThemeToggle />
        <AddModal primary>get started</AddModal>
      </div>
    </nav>
  );
};

export default Navbar;
