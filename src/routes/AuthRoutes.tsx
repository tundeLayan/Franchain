import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import OnBoardingLayout from "../layouts/OnboardingLayout";

import Register from "../pages/Register";
import CheckEmail from "../pages/CheckEmail";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";
import ConfirmationCheckEmail from "../pages/CheckEmail/confirmation";
import Onboarding from "../pages/Onboarding";
import OnboardingTwo from "../pages/Onboarding/two";

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
        path: "onboarding",
        element: <OnBoardingLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/onboarding/one" />,
          },
          {
            path: "one",
            element: <Onboarding />,
          },
          {
            path: "two",
            element: <OnboardingTwo />,
          },
        ],
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
