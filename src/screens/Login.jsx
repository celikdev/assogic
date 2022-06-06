import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import altogic from "../Altogic";
import { Container, Footer } from "../components/main";
import Header from "../components/main/Header";
import { Button, Input } from "../components/main/UI";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userToken"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await altogic.auth.signInWithEmail(email, password).then((res) => {
      if (res.session.token) {
        setCookie("userToken", res.session.token);
        navigate("/");
      } else {
        alert("Login failed");
      }
    });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="w-1/4 gap-8 py-4 flex flex-col items-center rounded-lg bg-primary filter drop-shadow-lg">
          <h1 className="font-Montserrat font-bold">Login to Assogic</h1>
          <div className="flex flex-col gap-4 items-center w-full">
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
            <Button onClick={handleLogin}>
              <text className="font-Montserrat font-bold text-sm text-main">
                Login
              </text>
            </Button>
            <Link to="/forgot-password">
              <text className="font-bold text-sm">Forgot Password</text>
            </Link>
            <Link to="/register">
              <text className="font-bold text-xs">
                Don’t you have an account? Register Now
              </text>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
