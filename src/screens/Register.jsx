import React, { useState } from "react";
import altogic from "../Altogic";

import { Container } from "../components/main";
import Header from "../components/main/Header";
import { Button, Input } from "../components/main/UI";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await altogic.auth
      .signUpWithEmail(email, password, name)
      .then((res) => console.log(res));
  };

  return (
    <>
      <Header />
      <Container>
        <div className="w-1/4 gap-8 py-4 flex flex-col items-center rounded-lg bg-primary filter drop-shadow-lg">
          <h1 className="font-Montserrat font-bold">Register on Assogic</h1>
          <div className="flex flex-col gap-4 items-center w-full">
            <Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name and Surname"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox" />
              <text className="text-xs font-bold mt-0.5">
                I Accept the Terms Of Use
              </text>
            </label>
            <Button onClick={handleRegister}>
              <text className="font-Montserrat font-bold text-sm text-main">
                Register
              </text>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
