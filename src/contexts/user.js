import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useAuth } from "./all";
import api from "../services/api";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [user, setUser] = useState();
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [userRole, setUserRole] = useState("");
  const [
    incompletePersonalDataRegistration,
    setIncompletePersonalDataRegistration,
  ] = useState(false);
  const [
    incompleteWalletAddressRegistration,
    setIncompleteWalletAddressRegistration,
  ] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [incompleteContractsRegistration, setIncompleteContractsRegistration] =
    useState(false);

  const loadUserData = async () => {
    try {
      if (isAuthenticated) {
        setIsLoadingUser(true);
        const response = await api.get("/users/me");
        setUser(response.data.data);
        setIsLoadingUser(false);
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
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
    }
  };

  const refreshUserData = () => {
    loadUserData();
    // console.log("context user refreshUserData");
  };

  useEffect(() => {
    loadUserData();
    // console.log("context user loadUserData");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && user) {
      setUserRole(user.role);
      setIncompletePersonalDataRegistration(
        user.registrationStatus.incompletePersonalData
      );
      setIncompleteWalletAddressRegistration(
        user.registrationStatus.incompleteWalletAddress
      );
      const contractSigned = user?.contracts.filter(
        (contract) => contract.status === "SIGNED"
      );
      if (!contractSigned.length) setIncompleteContractsRegistration(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isLoadingUser,
        user,
        userRole,
        incompletePersonalDataRegistration,
        incompleteWalletAddressRegistration,
        incompleteContractsRegistration,
        refreshUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useGetUser() {
  const userContext = useContext(UserContext);
  return userContext;
}
