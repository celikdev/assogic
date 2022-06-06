import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="transition-colors duration-300 border-2 border-secondary hover:bg-secondary w-8/12 py-2 rounded-lg"
    >
      {children}
    </button>
  );
};

export default Button;
