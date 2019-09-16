import React, { useState, useEffect } from "react";
import ModalChange from "./ModalChange";
import AdditionalInfoModalScreen from "./AdditionalInfoModalScreen";

function ModalChangeLog({ changes, clearNotification }) {
  const [extraView, setExtraView] = useState(false);

  const [selectedChange, setSelectedChange] = useState(null);

  return (
    <div className={`modal-changelog ${extraView ? "extra-view" : null}`}>
      <div className="modal-header">
        <h4 className={extraView ? "extra-view-title" : null}
          onClick={e => {
            e.preventDefault();
            if (extraView) {
              setExtraView(false);
            }
          }}
        >
          {extraView ? `< ${selectedChange.title}` : "Latest Changes"}
        </h4>
      </div>
      {extraView ? (
        <AdditionalInfoModalScreen change={selectedChange} />
      ) : (
        changes.map(change => {
          return (
            <ModalChange
              change={change}
              clearNotification={clearNotification}
              extraView={extraView}
              setExtraView={setExtraView}
              setSelectedChange={setSelectedChange}
            />
          );
        })
      )}
    </div>
  );
}

export default ModalChangeLog;
