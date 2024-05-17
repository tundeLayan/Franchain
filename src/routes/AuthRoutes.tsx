import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import CheckEmail from "../pages/CheckEmail";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";
import ConfirmationCheckEmail from "../pages/CheckEmail/confirmation";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <AuthLayout />,
        path: "auth/",
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "check-email",
            element: <CheckEmail />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "confirm-email",
            element: <ConfirmationCheckEmail />,
          },
        ],
      },
    ],
  },
]);

export default function AuthRoutes(): React.ReactElement {
  return <RouterProvider router={router} />;
}
