import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Container, Footer } from "../components/main";
import Header from "../components/main/Header";
import { Button, ErrorBox, Input } from "../components/main/UI";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userToken"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_ALTOGIC_BASE_URL}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        setLoading(false);
        setCookie("userToken", res.data.session.token);
        if (!res.data.found.companyID) {
          navigate("/create-or-join");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMessage(err.response.data[0].message);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <ErrorBox error={error} errorMessage={errorMessage} />
        <div className="w-1/4 gap-8 py-4 flex flex-col items-center rounded-lg bg-gray-200 filter drop-shadow-lg">
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
            <Button loading={loading} onClick={handleLogin}>
              <h1 className="font-Montserrat font-bold text-sm text-main">
                Login
              </h1>
            </Button>
            <Link to="/forgot-password">
              <h1 className="font-bold text-sm">Forgot Password</h1>
            </Link>
            <Link to="/register">
              <h1 className="font-bold text-xs">
                Don’t you have an account? Register Now
              </h1>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
