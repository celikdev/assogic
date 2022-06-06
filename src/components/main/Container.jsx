import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto my-14 flex flex-col items-center px-4">
      {children}
    </div>
  );
};

export default Container;
