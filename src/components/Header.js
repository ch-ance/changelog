import React from "react";
import Profile from "./Profile";

function Header({ openModal, notifNumber }) {
  return (
    <div className="header-container">
      <header className="header">
        <h1>Paperspace changelog</h1>
        <Profile openModal={openModal} notifNumber={notifNumber} />
      </header>
    </div>
  );
}

export default Header;
