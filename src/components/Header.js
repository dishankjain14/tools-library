import React from "react";
import "./../styles/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo"> </div>
        <h1>Tools Library</h1>
        <nav>
          <a href="#about">About</a>
          {/* Add more navigation links if needed */}
        </nav>
      </header>

      <div className="banner">
        <div className="banner-content">
          <h1 className="slide-up">WELCOME TO THE TOOLS LIBRARY</h1>
          <p className="slide-up">FIND AND ACCESS THE BEST TOOLS AVAILABLE ACROSS THE GLOBE</p>
        </div>
      </div>
    </>
  );
};

export default Header;
