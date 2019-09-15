import React from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes, clearNotification }) {
  return (
    <div className="modal-changelog">
      {changes.map(change => {
        return (
          <ModalChange change={change} clearNotification={clearNotification} />
        );
      })}
    </div>
  );
}

export default ModalChangeLog;
