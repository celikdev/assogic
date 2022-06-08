import React from "react";

const CreateOrJoin = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <button className="w-1/3 rounded-l-2xl transition-all duration-300 h-[90vh] hover:w-1/2 hover:h-full border-r-2 bg-secondary shadow-lg font-bold text-lg hover:text-xl">
          Create Your Company
        </button>
        <button className="w-1/3 rounded-r-2xl transition-all duration-300 h-[90vh] hover:w-1/2 hover:h-full border-r-2 bg-secondary shadow-lg font-bold text-lg hover:text-xl">
          Join to Company
        </button>
      </div>
    </>
  );
};

export default CreateOrJoin;
