import React from "react";
import Markdown from "react-markdown";

function ModalChange({ change }) {
  return (
    <div className="modal-change">
      <Markdown source={change} />
    </div>
  );
}

export default ModalChange;
