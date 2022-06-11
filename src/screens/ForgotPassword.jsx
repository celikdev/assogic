import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Container, Footer, Header } from "../components/main";

import { Button, ErrorBox, Input, SuccessBox } from "../components/main/UI";

const ForgotPassword = () => {
  const [cookies, setCookie] = useCookies(["userToken"]);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_ALTOGIC_BASE_URL}/user/forgot-password`, {
        email: email,
      })
      .then(() => {
        setSuccess(true);
        setLoading(false);
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
        <ErrorBox
          error={error}
          success={success}
          successMessage="Email Successfully Sent"
          errorMessage={errorMessage}
        />
        <div className="w-1/4 gap-8 py-4 flex flex-col items-center rounded-lg bg-gray-200 filter drop-shadow-lg">
          <h1 className="text-lg font-bold">Forgot Password</h1>
          <Input
            onFocus={() => {
              setError(false);
              setErrorMessage("");
              setSuccess(false);
            }}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <Button
            disabled={!email}
            loading={loading}
            onClick={() => handleSend()}
          >
            <h1 className="font-bold text-sm">Send</h1>
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ForgotPassword;
