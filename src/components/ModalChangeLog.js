import React, { useState, useEffect } from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes, clearNotification }) {
  const [extraView, setExtraView] = useState(false);

  // useEffect(() => {
  //   if (extraView) {
  //     console.log("moving to extra");

  //   } else {
  //     console.log("moving to regular");
  //   }
  // }, [extraView]);

  return (
    <div className={`modal-changelog ${extraView ? "extra-view" : null}`}>
      <div className="modal-header">
        <h4>Latest Changes</h4>
      </div>
      {changes.map(change => {
        return (
          <ModalChange
            change={change}
            clearNotification={clearNotification}
            extraView={extraView}
            setExtraView={setExtraView}
          />
        );
      })}
    </div>
  );
}

export default ModalChangeLog;
