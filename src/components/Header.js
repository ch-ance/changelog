import React from "react";
import Profile from "./Profile";

function Header({ openModal }) {
  return (
    <header className="header">
      <h1>Paperspace changelog</h1>
      <Profile openModal={openModal}/>
    </header>
  );
}

export default Header;
