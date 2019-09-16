import React from "react";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommonsPdAlt } from "@fortawesome/free-brands-svg-icons";

function Header({ openModal, notifNumber }) {
  return (
    <div className="header-container">
      <header className="header">
        <div className="left-side">
          <FontAwesomeIcon className="logo" icon={faCreativeCommonsPdAlt} />
          <div className="header-title">
            <h1>
              Paperspace <em>changelog</em>
            </h1>
            <a href="https://www.paperspace.com">paperspace.com</a>
          </div>
        </div>
        <Profile openModal={openModal} notifNumber={notifNumber} />
      </header>
    </div>
  );
}

export default Header;
