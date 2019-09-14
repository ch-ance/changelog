import React from "react";
import Profile from "./Profile";

function Header({ setModalOpen }) {
  return (
    <header className="header">
      <h1>Paperspace changelog</h1>
      <Profile setModalOpen={setModalOpen}/>
    </header>
  );
}

export default Header;
