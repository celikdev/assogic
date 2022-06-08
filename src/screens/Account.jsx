import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import altogic from "../Altogic";
import { Container, Header } from "../components/main";

const Account = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    if (!cookies.userToken) {
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    altogic.auth.signOutAll();
    removeCookie("userToken");
    window.location.href = "/";
  };
  return (
    <>
      <Header />
      <Container>
        <h1>Account</h1>
        <button
          onClick={() => handleLogout()}
          className="text-main font-bold border-2 border-error px-8 py-2 rounded-lg text-sm transition-colors duration-300 hover:bg-error hover:border-transparent hover:text-primary"
        >
          Logout
        </button>
      </Container>
    </>
  );
};

export default Account;
