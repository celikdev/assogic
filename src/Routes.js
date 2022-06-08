import {
  Account,
  Home,
  HowItWorks,
  Login,
  MyCompany,
  NotFound,
  Register,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/my-company/:companyID",
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
