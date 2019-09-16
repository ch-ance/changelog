import React from "react";
import Markdown from "react-markdown";

function Change({ change }) {
  console.table("CHANGE OBJECT: ", change.extra);
  return (
    <div className="change">
      <Markdown source={change.content} />
    </div>
  );
}

export default Change;
