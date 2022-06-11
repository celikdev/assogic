import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className="w-8/12 transition-colors duration-300 border-2 border-transparent focus:border-secondary rounded-lg font-Montserrat font-bold text-sm px-2 h-10 outline-none bg-primary shadow-lg"
    />
  );
};

export default Input;
