import React from "react";
import Markdown from "react-markdown";

function Change({ change }) {
  return (
    <div className="change">
      <Markdown source={change} />
    </div>
  );
}

export default Change;
