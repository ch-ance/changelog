import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile-icon">
      <FontAwesomeIcon icon={faUserCircle} />
      <NotificationIcon number={5} />
    </div>
  );
}

function NotificationIcon({ number }) {
  return <span className="notify">{number}</span>;
}

export default Profile;
