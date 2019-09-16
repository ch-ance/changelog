import React from "react";

function AdditionalInfoModalScreen({ change }) {
  const label = change.label.replace("[", "").replace("]", "");

  return (
    <div className="modal-change">
      <div className={`label ${label}`}>{label}</div>
      {change.content.map(piece => (
        <p>{piece}</p>
      ))}
      {change.extra.replace("#### ", "")}
      {change.link !== "?" && (
        <a rel="noopener noreferrer" href={change.link} target="_blank">
          {change.link}
        </a>
      )}
    </div>
  );
}

export default AdditionalInfoModalScreen;
