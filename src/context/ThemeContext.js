import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      primary: "#3700b3",
      secondary: "#bb86fc",
      btn: "#5F7BD5",
      main: "#D1D9F3",
    },
    dark: {
      primary: "#2d132c",
      secondary: "#c72c41",
      main: "#ed6663",
      btn: "#c72c41",
    },
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      isLightTheme: !prevState.isLightTheme,
    }));
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
