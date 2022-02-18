import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { combineTheme, dark, light } from "../styles/themes";

const CustomThemeContext = createContext({});

export function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState(combineTheme(light));

  // Toggle theme
  // const toggleTheme = () => {
  // 	setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
  // 	let themeMode =
  // 		theme.title === 'light' ? (theme.title = 'dark') : (theme.title = 'light')
  // 	localStorage.setItem('*cra_init_theme*', themeMode)
  // }

  // Get theme on Local Storage
  useEffect(() => {
    console.log("setTheme based on localStorage!");

    if (localStorage.getItem("*cra_init_theme*") !== null) {
      let getStorage = localStorage.getItem("*cra_init_theme*");

      if (getStorage === "dark") {
        setTheme(combineTheme(dark));
      } else {
        setTheme(combineTheme(light));
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={setTheme}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
}

export function useCustomTheme() {
  const customThemeContext = useContext(CustomThemeContext);
  return customThemeContext;
}
