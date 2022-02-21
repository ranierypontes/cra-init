import React from "react";
import ErrorBoundary from "./pages/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import { AuthProvider, UserProvider, MenuProvider } from "./contexts/all";
import { CustomThemeProvider } from "./contexts/all";
import Routes from "./routes";
import "./styles/vendors/bootstrap.scss";
import GlobalStyles from "./styles/globalStyles";
import "./styles/settings/fontface.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          {/* <AuthProvider> */}
          {/* <UserProvider> */}
          {/* <MenuProvider> */}
          <CustomThemeProvider>
            <GlobalStyles />
            <ToastContainer />
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
