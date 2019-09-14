import React from "react";
import Change from "./Change";

function ChangeLog() {
  const changes = ["one update", "another update"];

  return (
    <div>
      {changes.map(change => {
        return <Change change={change} />;
      })}
    </div>
  );
}

export default ChangeLog;
