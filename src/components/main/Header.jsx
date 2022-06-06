import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo-1080.png";

const Header = () => {
  const [cookies, setCookie] = useCookies(["userToken"]);

  return (
    <header className="bg-primary h-16 shadow-md flex items-center px-36 justify-between">
      <img alt="asslogic-logo" src={Logo} className="w-9" />
      <div className="flex gap-8">
        <Link to="/">
          <h1 className="font-Montserrat font-bold text-main">Home</h1>
        </Link>
        <Link to="/how-it-works">
          <h1 className="font-Montserrat font-bold text-main">How It Works?</h1>
        </Link>
        {cookies.userToken ? (
          <Link to="/">
            <h1 className="font-Montserrat font-bold text-main">My Company</h1>
          </Link>
        ) : null}
      </div>
      <div className="flex gap-4">
        {!cookies.userToken ? (
          <>
            <Link
              to="/login"
              className="bg-secondary text-sm font-Montserrat px-8 py-2 rounded-lg font-bold text-main transition-colors border-2 border-transparent hover:border-secondary hover:bg-transparent hover:text-main duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-secondary text-sm font-Montserrat px-8 py-2 rounded-lg font-bold text-main transition-colors border-2 border-transparent hover:border-secondary hover:bg-transparent hover:text-main duration-300"
            >
              Register
            </Link>
          </>
        ) : (
          <Link
            to="/account"
            className="bg-secondary text-sm font-Montserrat px-8 py-2 rounded-lg font-bold text-main transition-colors border-2 border-transparent hover:border-secondary hover:bg-transparent hover:text-main duration-300"
          >
            Account
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
