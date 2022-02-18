import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { ThemeProvider } from "styled-components";

import ErrorBoundary from "./pages/ErrorBoundary";
// import { AuthProvider, UserProvider, MenuProvider } from "./contexts/all";
import { CustomThemeProvider } from "./contexts/all";
import Routes from "./routes";
// import { combineTheme, dark, light } from "./styles/themes";
import "./styles/vendors/bootstrap.scss";
import GlobalStyles from "./styles/globalStyles";
import "./styles/settings/fontface.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [theme, setTheme] = useState(combineTheme(light));

  // Toggle theme
  // const toggleTheme = () => {
  // 	setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
  // 	let themeMode =
  // 		theme.title === 'light' ? (theme.title = 'dark') : (theme.title = 'light')
  // 	localStorage.setItem('*cra_init_theme*', themeMode)
  // }

  // Get theme on Local Storage
  // useEffect(() => {
  //   if (localStorage.getItem("*cra_init_theme*") !== null) {
  //     let getStorage = localStorage.getItem("*cra_init_theme*");

  //     if (getStorage === "dark") {
  //       setTheme(combineTheme(dark));
  //     } else {
  //       setTheme(combineTheme(light));
  //     }
  //   }
  // }, []);

  return (
    <>
      <GlobalStyles />
      <ErrorBoundary>
        <ToastContainer />
        <BrowserRouter>
          {/* <AuthProvider> */}
          {/* <UserProvider> */}
          {/* <MenuProvider> */}
          <CustomThemeProvider>
            <Routes />
          </CustomThemeProvider>
          {/* </MenuProvider> */}
          {/* </UserProvider> */}
          {/* </AuthProvider> */}
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
