import React, { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useGetUser } from "../contexts/all";
import { SpinLoading } from "../components/All";
// import { PageNotFound } from "../pages/All";

const LayoutDashboard = React.lazy(() =>
  import("../components/Layout/Dashboard")
);
const PageRegister = React.lazy(() => import("../pages/Register"));
const PageDashboard = React.lazy(() => import("../pages/Dashboard"));
const PageDashboardRendimentos = React.lazy(() =>
  import("../pages/Rendimentos")
);
const PageDashboardDepositar = React.lazy(() => import("../pages/Depositar"));
const PageDashboardConta = React.lazy(() => import("../pages/Conta"));
const PageDashboardSuporte = React.lazy(() => import("../pages/Suporte"));
// const PagePlayground = React.lazy(() => import("../pages/Playground"));

const UserPrivateRoutes = () => {
  const {
    incompletePersonalDataRegistration,
    incompleteWalletAddressRegistration,
    incompleteContractsRegistration,
  } = useGetUser();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  return [
    {
      path: "/",
      element: <Navigate to={from} replace />,
      // children: [
      //   { path: 'login', element: <Login /> },
      //   { path: '/', element: <Navigate to="/login" /> },
      // ],
    },
    {
      path: "/entrar",
      element: <Navigate to={from} replace />,
    },
    {
      path: "/cadastrar",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PageRegister />
        </Suspense>
      ),
      // element: <Navigate to={from} replace />,
    },

    {
      path: "/dashboard",
      element:
        !incompletePersonalDataRegistration &&
        !incompleteWalletAddressRegistration &&
        !incompleteContractsRegistration ? (
          <Suspense fallback={<SpinLoading fullscreen />}>
            <LayoutDashboard>
              <PageDashboard />
            </LayoutDashboard>
          </Suspense>
        ) : (
          <Navigate to="/conta" replace />
        ),
    },
    {
      path: "/rendimentos",
      element:
        !incompletePersonalDataRegistration &&
        !incompleteWalletAddressRegistration &&
        !incompleteContractsRegistration ? (
          <Suspense fallback={<SpinLoading fullscreen />}>
            <LayoutDashboard>
              <PageDashboardRendimentos />
            </LayoutDashboard>
          </Suspense>
        ) : (
          <Navigate to="/conta" replace />
        ),
    },
    {
      path: "/depositos",
      element:
        !incompletePersonalDataRegistration &&
        !incompleteWalletAddressRegistration &&
        !incompleteContractsRegistration ? (
          <Suspense fallback={<SpinLoading fullscreen />}>
            <LayoutDashboard>
              <PageDashboardDepositar />
            </LayoutDashboard>
          </Suspense>
        ) : (
          <Navigate to="/conta" replace />
        ),
    },
    {
      path: "/conta",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageDashboardConta />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    {
      path: "/suporte",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageDashboardSuporte />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    // {
    //   path: "/playground",
    //   element: (
    //     <Suspense fallback={<SpinLoading fullscreen />}>
    //       <LayoutDashboard>
    //         <PagePlayground />
    //       </LayoutDashboard>
    //     </Suspense>
    //   ),
    // },
    {
      path: "/*",
      element: <Navigate to="/dashboard" replace />,
    },
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ];
};

export default UserPrivateRoutes;
