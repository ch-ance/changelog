import React from "react";
import Markdown from "react-markdown";

function Change({ change }) {
  console.table("CHANGE OBJECT: ", change.extra);
  const date = new Date(change.date);
  const today = new Date();
  const difference = Math.abs(
    Math.round(
      (today.getTime() - date.getTime() / 1000) / (60 * 60 * 24 * 7 * 4)
    )
  );
  return (
    <div className="change">
      <span>{difference}</span>
      <div className="inner-content">
        <h2>{change.title}</h2>
        {change.content.map(piece => (
          <p>{piece}</p>
        ))}
        {/* <p>{change.content.replace(/-/g, "")}</p> */}
      </div>
    </div>
  );
}

export default Change;
