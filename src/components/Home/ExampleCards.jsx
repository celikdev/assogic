import React, { useState } from "react";

import ProductImage from "../../assets/exampleAssets/23-MacBook-Air.jpg";
import ProductImage2 from "../../assets/exampleAssets/iphone13.jpg";

const ExampleCards = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filterButon = ["All", "Computer", "Phone"];

  const exampleCardData = [
    {
      title: "Macbook Air",
      category: "Computer",
      currentOwner: "Hakan Çelik",
      image: ProductImage,
    },
    {
      title: "IPhone 13",
      category: "Phone",
      currentOwner: "Yüksel Öztürk",
      image: ProductImage2,
    },
    {
      title: "Macbook Air",
      category: "Computer",
      currentOwner: "John Doe",
      image: ProductImage,
    },
  ];
  return (
    <>
      <div className="w-3/4 flex flex-col gap-2">
        <h1 className="font-bold text-main">Example's Assets</h1>
        <div className="flex gap-4">
          {filterButon.map((filter) => (
            <button
              onClick={() => setSelectedFilter(filter)}
              className={`${
                selectedFilter == filter
                  ? "border-2 transition-colors duration-300 hover:border-transparent bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-primary border-main py-1"
                  : "border-2 transition-colors duration-300 hover:border-transparent hover:bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-main border-main py-1"
              } `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4 gap-8 grid grid-cols-3">
        {exampleCardData
          .filter(
            (item) =>
              selectedFilter === "All" || item.category === selectedFilter
          )
          .map((card, index) => (
            <div key={index} className="relative">
              <img
                src={card.image}
                className="rounded-lg w-[360px] h-[200px] object-cover shadow-lg brightness-75"
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
