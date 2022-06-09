import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import altogic from "../Altogic";
import axios from "axios";
import { Container, Header } from "../components/main";
import { useState } from "react";

const Account = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!cookies.userToken) {
      navigate("/");
    } else {
      getUserData();
    }
  }, []);
  const handleLogout = () => {
    altogic.auth.signOutAll();
    removeCookie("userToken");
    window.location.href = "/";
  };
  const getUserData = async () => {
    await axios
      .get(`${process.env.REACT_APP_ALTOGIC_BASE_URL}/user/company`, {
        headers: {
          Session: cookies.userToken,
        },
      })
      .then((res) => setData(res.data));
  };
  return (
    <>
      <Header />
      <Container>
        <h1 className="font-bold text-lg">Account</h1>
        <div className="flex flex-col text-center">
          {data.found && data.found1 ? (
            <>
              <span className="font-bold flex gap-1 text-center">
                <h1 className="opacity-50">User Name:</h1> {data.found1.name}
              </span>
              <span className="font-bold flex gap-1 text-center">
                <h1 className="opacity-50">User Email:</h1> {data.found1.email}
              </span>
              <span className="font-bold flex gap-1 text-center">
                <h1 className="opacity-50">User Company:</h1>
                {data.found.companyName}
              </span>
            </>
          ) : null}
        </div>
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
