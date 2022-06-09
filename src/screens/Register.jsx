import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Footer } from "../components/main";
import Header from "../components/main/Header";
import { Button, ErrorBox, Input } from "../components/main/UI";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_ALTOGIC_BASE_URL}/user/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMessage("This credentials not be used!");
      });
  };

  return (
    <>
      <Header />
      <Container>
        <ErrorBox error={error} errorMessage={errorMessage} />
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
            <Button loading={loading} onClick={handleRegister}>
              <text className="font-Montserrat font-bold text-sm text-main">
                Register
              </text>
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
