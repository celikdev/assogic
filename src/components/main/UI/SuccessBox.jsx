import React from "react";

const SuccessBox = ({ success, successMessage, className }) => {
  return (
    <div
      className={`bg-success ${className} ${
        success ? "flex" : "opacity-0 absolute -translate-y-4"
      } font-semibold px-4 h-12 items-center transition-all transform justify-center py-2 text-sm rounded-lg text-main w-1/4`}
    >
      <h1 className="">{successMessage}</h1>
    </div>
  );
};

export default SuccessBox;
