import React from "react";

const ErrorBox = ({ error, errorMessage, className }) => {
  return (
    <div
      className={`bg-error ${className} ${
        error ? "flex" : "opacity-0 flex -translate-y-4"
      } font-semibold px-4 h-12 items-center transition-all transform justify-center py-2 text-sm rounded-lg text-primary w-1/4`}
    >
      <h1 className="">{errorMessage}</h1>
    </div>
  );
};

export default ErrorBox;
