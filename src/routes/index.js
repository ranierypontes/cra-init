import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";

// import { useAuth, useGetUser } from "../contexts/all";
import { SpinLoading } from "../components/All";
import PublicRoutes from "./PublicRoutes";
// import UserPrivateRoutes from "./UserPrivateRoutes";
// import AdminPrivateRoutes from "./AdminPrivateRoutes";

const Routes = () => {
  // const { isAuthenticated } = useAuth();
  // const { userRole } = useGetUser();
  const [isLoading, setIsLoading] = useState(true);
  const publicRouting = useRoutes(PublicRoutes());
  // const userPrivateRouting = useRoutes(UserPrivateRoutes());
  // const adminPrivateRouting = useRoutes(AdminPrivateRoutes());

  const loadingRoutes = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    loadingRoutes();
  }, []);

  return (
    <>{isLoading ? <SpinLoading fullscreen /> : publicRouting}</>

    // <>
    //   {isLoading ? (
    //     <SpinLoading fullscreen />
    //   ) : (
    //     <>
    //       {isAuthenticated && userRole === "USER"
    //         ? userPrivateRouting
    //         : isAuthenticated && userRole === "ADMIN"
    //         ? adminPrivateRouting
    //         : publicRouting}
    //     </>
    //   )}
    // </>
  );
};

export default Routes;
