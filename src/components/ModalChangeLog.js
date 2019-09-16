import React, { useState, useEffect } from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes, clearNotification }) {
  const [extraView, setExtraView] = useState(false);

  return (
    <div className={`modal-changelog ${extraView ? "extra-view" : null}`}>
      <div className="modal-header">
        <h4>{extraView ? "Additional Information" : "Latest Changes"}</h4>
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
