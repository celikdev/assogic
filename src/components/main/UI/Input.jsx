import React from "react";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-8/12 transition-colors duration-300 border-2 border-transparent focus:border-secondary rounded-lg font-Montserrat font-bold text-sm px-2 h-10 outline-none bg-white shadow-lg"
    />
  );
};

export default Input;
