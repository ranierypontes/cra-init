import React, { Suspense } from "react";
// import { Navigate } from "react-router-dom";

import { SpinLoading } from "../components/All";
// import { PageNotFound } from "../pages/All";

const PagePlayground = React.lazy(() => import("../pages/Playground"));
const PageLogin = React.lazy(() => import("../pages/Auth/Login"));
const PageRegister = React.lazy(() => import("../pages/Auth/Register"));
const PageForgotPassword = React.lazy(() =>
  import("../pages/Auth/ForgotPassword")
);
const PageResetPassword = React.lazy(() =>
  import("../pages/Auth/ResetPassword")
);

const PublicRoutes = () => {
  // let location = useLocation();

  return [
    {
      path: "/",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PageLogin />
        </Suspense>
      ),
      // children: [
      //   { path: 'login', element: <Login /> },
      //   { path: '/', element: <Navigate to="/login" /> },
      // ],
    },
    {
      path: "/entrar",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PageLogin />
        </Suspense>
      ),
    },
    {
      path: "/cadastrar",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PageRegister />
        </Suspense>
      ),
    },
    {
      path: "/esqueci-minha-senha",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PageForgotPassword />
        </Suspense>
      ),
    },
    {
      path: "/resetar-senha",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PageResetPassword />
        </Suspense>
      ),
    },
    // {
    //   path: "/login/confirmacao",
    //   element: (
    //     <Suspense fallback={<SpinLoading fullscreen />}>
    //       <PageLogin accountConfirmation={true} />
    //     </Suspense>
    //   ),
    // },
    {
      path: "/playground",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <PagePlayground />
        </Suspense>
      ),
    },
    // {
    //   path: "/*",
    //   element: <Navigate to="/entrar" replace />,
    // },
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ];
};

export default PublicRoutes;
