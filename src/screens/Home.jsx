import React, { useEffect } from "react";

import { Container, Header } from "../components/main";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="bg-red-400 container">
          <h1 className="font-Montserrat font-extrabold text-8xl">
            The Best <br /> Asset Management App
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Home;
