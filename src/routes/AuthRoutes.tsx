import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    // TODO: Implement Error boundary
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      // {
      //   path: "login",
      //   element: <Register />,
      // },
    ],
  },
]);

export default function AuthRoutes(): React.ReactElement {
  return <RouterProvider router={router} />;
}
