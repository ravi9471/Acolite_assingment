import React from "react";
import Citizenicon from '../assets/Citizenicon.png'
import "../Style.css";

const Header = () => {
  return (
    <header className="header">
      <img src={Citizenicon} alt="Citizens Bank Logo" className="logo" />
      <h1 className="bank-heading">Citizens Bank</h1>
    </header>
  );
};

export default Header;
