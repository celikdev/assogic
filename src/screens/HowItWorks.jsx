import React from "react";

import { Container, Footer, Header } from "../components/main";
import DownArrow from "../assets/down-arrow.svg";

const Home = () => {
  const steps = [
    "First of all, register with Assogic!",
    "Then join a company or create one!",
    "If you wish, you can invite other people with your company's 6-digit code!",
    "Congratulations, you now have access to all your company assets!",
  ];
  return (
    <>
      <Header />
      <Container>
        <h1 className="font-bold text-lg">How It Works?</h1>
        <div className="gap-8 px-10 my-8 flex flex-col items-center rounded-lg bg-gray-200 filter drop-shadow-lg">
          <div className="pt-8 flex flex-col items-center">
            {steps.map((step, index) => (
              <>
                <h1 className="font-bold text-center py-4">{step}</h1>
                {index !== steps.length - 1 && (
                  <img alt="arrow" src={DownArrow} className="w-10 h-10" />
                )}
              </>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
