import React, { useEffect } from "react";
import Markdown from "react-markdown";
import { useInView } from "react-intersection-observer";

function ModalChange({
  change,
  clearNotification,
  setExtraView,
  extraView,
  extra
}) {
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
        setExtraView(!extraView);
      }}
    >
      <Markdown source={extra ? change.extra : change.content} />
    </div>
  );
}

export default ModalChange;
