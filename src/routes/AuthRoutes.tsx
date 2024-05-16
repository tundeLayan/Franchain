import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Home from "../pages/Home";

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
        ],
      },
    ],
  },
]);

export default function AuthRoutes(): React.ReactElement {
  return <RouterProvider router={router} />;
}
