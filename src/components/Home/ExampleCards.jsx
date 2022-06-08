import React from "react";

import ProductImage from "../../assets/23-MacBook-Air.jpg";

const ExampleCards = () => {
  const exampleCardData = [
    {
      title: "Macbook Air",
      category: "Computer",
      currentOwner: "John Doe",
    },
    {
      title: "IPhone 13",
      category: "Phone",
      currentOwner: "John Doe",
    },
    {
      title: "Macbook Air",
      category: "Computer",
      currentOwner: "John Doe",
    },
  ];
  return (
    <>
      <div className="w-3/4 flex flex-col gap-2">
        <h1 className="font-bold text-main">Example's Assets</h1>
        <div>
          <button className="border-2 transition-colors duration-300 hover:border-transparent hover:bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-main border-main py-1">
            All
          </button>
        </div>
      </div>
      <div className="w-3/4 gap-8 grid grid-cols-3">
        {exampleCardData.map((card, index) => (
          <div key={index} className="relative">
            <img
              src={ProductImage}
              className="rounded-lg shadow-lg brightness-75"
              alt="productImage"
            />
            <h1 className="absolute bottom-5 left-5 font-semibold text-primary filter drop-shadow-xl text-sm">
              {card.title}
              <br />
              {card.currentOwner}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExampleCards;
