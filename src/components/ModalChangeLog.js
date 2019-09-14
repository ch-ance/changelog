import React from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes }) {
  return (
    <div className="modal-changelog">
      {changes.map(change => {
        return <ModalChange change={change} />;
      })}
    </div>
  );
}

export default ModalChangeLog;
