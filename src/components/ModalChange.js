import React from "react";
import Markdown from "react-markdown";

function ModalChange({ change }) {
  return (
    <div className="modal-change">
      <Markdown source={change.content} />
    </div>
  );
}

export default ModalChange;
