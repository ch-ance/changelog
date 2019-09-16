import React from "react";

function Profile({ openModal, notifNumber }) {
  return (
    <div
      className="profile-icon"
      onClick={e => {
        e.preventDefault();
        openModal();
      }}
    >
      <NotificationIcon number={notifNumber} />
      <span>Recent Changes</span>
    </div>
  );
}

function NotificationIcon({ number }) {
  return number > 0 ? <span className="notify">{number}</span> : null;
}

export default Profile;
