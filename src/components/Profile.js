import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Profile({ openModal, notifNumber }) {
  return (
    <div
      className="profile-icon"
      onClick={e => {
        e.preventDefault();
        openModal();
      }}
    >
      {/* <FontAwesomeIcon icon={faUserCircle} /> */}
      <NotificationIcon number={notifNumber} />
      <span>Recent Changes</span>
    </div>
  );
}

function NotificationIcon({ number }) {
  return number > 0 ? <span className="notify">{number}</span> : null;
}

export default Profile;
