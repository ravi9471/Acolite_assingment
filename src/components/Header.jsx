import React from "react";
import "../Style.css";

const Header = () => {
  return (
    <header className="header">
      <img src="CitizenIcon.png" alt="Citizens Bank Logo" className="logo" />
      <h1 className="bank-heading">Citizens Bank</h1>
    </header>
  );
};

export default Header;
