import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import api from "../services/api";
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const SweetAlert = withReactContent(Swal);
  // const [loading, setLoading] = useState(true);
  // const navigateTo = useNavigate();

  const signIn = async (auth, setSubmitting) => {
    try {
      const response = await api.get("/authenticate", {
        auth,
      });

      // api.defaults.headers.Authorization = `Bearer ${response.data.metadata.token}`;
      localStorage.setItem(
        "@citizen:access_token",
        JSON.stringify(response.data.metadata.token)
      );

      toast.success("Autenticado com sucesso!", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        transition: Flip,
      });

      setIsAuthenticated(true);
    } catch (error) {
      signOut();
      toast.error(
        error.response?.data.message ||
          "Algo deu errado, tente novamente mais tarde.",
        {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
      );
    } finally {
      setSubmitting(false);
    }
  };

  const signOut = () => {
    try {
      setTimeout(() => {
        localStorage.removeItem("@citizen:access_token");
        setIsAuthenticated(false);
      }, 300);
    } catch (e) {
      console.log("Logout Error", e);
    }
  };

  const signUp = async (values) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("/users", values);

      SweetAlert.fire({
        title: "Feito!",
        text: "Verifique o seu email para finalizar o seu cadastro.",
        icon: "info",
        showCloseButton: false,
        showConfirmButton: true,
        timer: 99999,
        timerProgressBar: true,
      });

      // localStorage.setItem(
      //   "@citizen:access_token",
      //   JSON.stringify(response.data.metadata.token)
      // );

      // setIsAuthenticated(true);

      // toast.success("Cadastro realizado com sucesso!", {
      //   position: "top-center",
      //   autoClose: 1200,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   progress: undefined,
      //   transition: Flip,
      // });
    } catch (error) {
      toast.error(
        error.response?.data.message ||
          "Algo deu errado, tente novamente mais tarde.",
        {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  const verifyStorageToken = async () => {
    const storageToken = localStorage.getItem("@citizen:access_token");

    if (storageToken) {
      // api.defaults.headers.Authorization = `Bearer ${JSON.parse(storageToken)}`;
      setIsAuthenticated(true);
    } else {
      // api.defaults.headers.Authorization = null;
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    verifyStorageToken();
    // console.log("verifyStorageToken");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, verifyStorageToken, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
