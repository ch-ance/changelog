import React from "react";
import Change from "./Change";

function ChangeLog({ changes }) {
  return (
    <div className="changelog">
      {changes.map(change => {
        return <Change change={change} />;
      })}
    </div>
  );
}

export default ChangeLog;
