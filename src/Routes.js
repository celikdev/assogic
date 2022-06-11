import {
  Account,
  CreateOrJoin,
  ForgotPassword,
  Home,
  HowItWorks,
  Login,
  MyCompany,
  NotFound,
  Register,
  EmailVerifySuccess,
} from "./screens";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/user/verify/:userID",
    element: <EmailVerifySuccess />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/create-or-join",
    element: <CreateOrJoin />,
  },
  {
    path: "/my-company",
    element: <MyCompany />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
