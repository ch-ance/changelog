import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ModalChange({ change, clearNotification, setExtraView, extraView, setSelectedChange }) {
  const label = change.label.replace("[", "").replace("]", "");
  
  const [ref, inView] = useInView({
    threshold: 1
  });

  useEffect(() => {
    if (inView) {
      clearNotification(change.id);
    }
  }, [inView]);

  return (
    <div
      className="modal-change"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        setSelectedChange(change)
        setExtraView(!extraView);
      }}
    >
      <h2>{change.title}</h2>
      <div className={`label ${label}`}>{label}</div>
      {change.content.map(piece => (
        <p>{piece}</p>
      ))}
    </div>
  );
}

export default ModalChange;
