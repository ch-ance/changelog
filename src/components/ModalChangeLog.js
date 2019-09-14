import React from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes }) {
  return (
    <ul>
      {changes.map(change => {
        return <ModalChange change={change} />;
      })}
    </ul>
  );
}

export default ModalChangeLog;
