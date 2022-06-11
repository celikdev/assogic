import React from "react";

const StateBox = ({
  error,
  errorMessage,
  className,
  success,
  successMessage,
}) => {
  return (
    <div
      className={`${className} ${error ? "bg-error" : "bg-success"} ${
        error || success ? "flex" : "opacity-0 flex -translate-y-4"
      } font-semibold px-4 h-12 items-center transition-all transform justify-center py-2 text-sm rounded-lg ${
        error ? "text-primary" : "bg-main"
      } w-1/4`}
    >
      <h1 className="">{error ? errorMessage : successMessage}</h1>
    </div>
  );
};

export default StateBox;
