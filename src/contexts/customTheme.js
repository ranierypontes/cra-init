import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { combineTheme, dark, light } from "../styles/themes";

const CustomThemeContext = createContext({});

export function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState(combineTheme(light));

  // Toggle Dark Theme
  const toggleDarkTheme = () => {
    if (theme.title === "light") {
      setTheme(combineTheme(dark));
      localStorage.setItem("*cra_init_theme*", "dark");
    } else {
      setTheme(combineTheme(light));
      localStorage.setItem("*cra_init_theme*", "light");
    }
  };

  // Get theme on local storage
  useEffect(() => {
    if (localStorage.getItem("*cra_init_theme*") !== null) {
      let getStorage = localStorage.getItem("*cra_init_theme*");

      if (getStorage === "light") {
        setTheme(combineTheme(light));
      } else {
        setTheme(combineTheme(dark));
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ toggleDarkTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
}

export function useCustomTheme() {
  const customThemeContext = useContext(CustomThemeContext);
  return customThemeContext;
}
