import React from "react";
import Markdown from "react-markdown";

function ModalChange({ change }) {
  return (
    <li>
      <Markdown source={change} />
    </li>
  );
}

export default ModalChange;
