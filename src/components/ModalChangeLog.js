import React from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes, clearNotification }) {
  return (
    <div className="modal-changelog">
      <div className="modal-header">
      <span>{"<=="}</span>
      <h4>Latest Changes</h4>
      </div>
      {changes.map(change => {
        return (
          <ModalChange change={change} clearNotification={clearNotification} />
        );
      })}
    </div>
  );
}

export default ModalChangeLog;
