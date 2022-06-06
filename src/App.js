import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes";

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
