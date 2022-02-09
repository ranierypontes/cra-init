import React, { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";

// import { useAuth, useGetUser } from "../contexts/all";
import { SpinLoading } from "../components/All";
// import { PageNotFound } from "../pages/All";

const LayoutDashboard = React.lazy(() =>
  import("../components/Layout/Dashboard")
);
const PageRegister = React.lazy(() => import("../pages/Register"));
const PageAdminDashboard = React.lazy(() => import("../pages/Admin/Dashboard"));
const PageAdminUsers = React.lazy(() => import("../pages/Admin/Users"));
const PageAdminManageUsers = React.lazy(() =>
  import("../pages/Admin/ManageUsers")
);
const PageAdminProfileUser = React.lazy(() =>
  import("../pages/Admin/ProfileUser")
);
// const PageAdminRendimentos = React.lazy(() =>
//   import("../pages/Admin/Rendimentos")
// );
const PageAdminContratos = React.lazy(() => import("../pages/Admin/Contratos"));
// const PagePlayground = React.lazy(() => import("../pages/Playground"));

const AdminPrivateRoutes = () => {
  // const { user, isLoadingUser, incompleteRegistration } = useGetUser();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/admin/dashboard";

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
      path: "/admin/dashboard",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageAdminDashboard />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    {
      path: "/admin/usuarios",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageAdminUsers />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    {
      path: "/admin/usuarios/gerenciar",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageAdminManageUsers />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    {
      path: "/admin/usuarios/gerenciar/:userId",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageAdminProfileUser />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    {
      path: "/admin/contratos",
      element: (
        <Suspense fallback={<SpinLoading fullscreen />}>
          <LayoutDashboard>
            <PageAdminContratos />
          </LayoutDashboard>
        </Suspense>
      ),
    },
    // {
    //   path: "/admin/rendimentos",
    //   element: (
    //     <Suspense fallback={<SpinLoading fullscreen />}>
    //       <LayoutDashboard>
    //         <PageAdminRendimentos />
    //       </LayoutDashboard>
    //     </Suspense>
    //   ),
    // },
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
      element: <Navigate to="/admin/dashboard" replace />,
    },
    // {
    //   path: "*",
    //   element: (
    //     <Suspense fallback={<SpinLoading fullscreen />}>
    //       <PageNotFound />
    //     </Suspense>
    //   ),
    // },
  ];
};

export default AdminPrivateRoutes;
