import React from "react";
import { ExampleCards } from "../components/Home";

import { Container, Header } from "../components/main";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="container flex justify-center">
          <span className="font-Montserrat font-extrabold text-8xl text-main">
            <h1 className="opacity-50">The Best</h1> Asset Management App
          </span>
        </div>
        <ExampleCards />
      </Container>
    </>
  );
};

export default Home;
