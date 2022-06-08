import React from "react";
import AltogicLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="h-48 flex flex-col items-center justify-center">
      <h1 className="font-bold text-main opacity-50 text-xs">Powered By</h1>
      <img src={AltogicLogo} alt="altogicLogo" className="w-14 h-14" />
    </footer>
  );
};

export default Footer;
