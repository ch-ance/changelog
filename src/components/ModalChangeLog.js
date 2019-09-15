import React, { useState } from "react";
import ModalChange from "./ModalChange";

function ModalChangeLog({ changes, clearNotification }) {
  const [extraView, setExtraView] = useState(false);

  return (
    <div className="modal-changelog">
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
            extra={extraView}
          />
        );
      })}
    </div>
  );
}

export default ModalChangeLog;
