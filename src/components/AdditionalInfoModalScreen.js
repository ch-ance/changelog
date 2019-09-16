import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AdditionalInfoModalScreen({ change }) {
  const label = change.label.replace("[", "").replace("]", "");

  return (
    <div className="modal-change">
      <div className={`label ${label}`}>{label}</div>
      {change.content.map(piece => (
        <p>{piece}</p>
      ))}
      {change.extra.replace("#### ", "")}
    </div>
  );
}

export default AdditionalInfoModalScreen;
