import { Home, HowItWorks, Login, NotFound, Register } from "./screens";

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
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
