import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "./pages/ErrorBoundary";
// import { AuthProvider, UserProvider, MenuProvider } from "./contexts/all";
import Routes from "./routes";

import "./styles/vendors/bootstrap.scss";
import GlobalStyles from "./styles/globalStyles";
import "./styles/settings/fontface.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary>
        <ToastContainer />
        <BrowserRouter>
          {/* <AuthProvider> */}
          {/* <UserProvider> */}
          {/* <MenuProvider> */}
          <Routes />
          {/* </MenuProvider> */}
          {/* </UserProvider> */}
          {/* </AuthProvider> */}
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
