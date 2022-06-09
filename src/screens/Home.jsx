import React from "react";
import { ExampleCards } from "../components/Home";

import { Container, Footer, Header } from "../components/main";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="container flex justify-center">
          <span className="font-Montserrat text-secondary font-extrabold text-8xl filter drop-shadow-xl">
            <h1 className="opacity-50 text-main">The Best</h1> Asset Management
            App
          </span>
        </div>
        <ExampleCards />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
